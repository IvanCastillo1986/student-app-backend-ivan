const app = require('../../app.js');
const supertest = require('supertest');


describe("Returns JSON data for all students", () => {
    
    it("returns an object with all students", async () => {
        await supertest(app).get('/students')
            .expect(200)
            .then((response) => {
                // response.body is equal to the studentData object from our controller
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students[0].firstName).toBe("Ingaberg")
                expect(response.body.students.length).toBe(25)
            });
    });

    it("returns an object with a number of students equal to or less than a limit", async () => {
        await supertest(app).get('/students?limit=10')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(10)
            });

        await supertest(app).get('/students?limit=35')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array)
                expect(response.body.students.length).toBe(25)
            });
    });

    it("returns an object with students whose id >= min and id <= max", async () => {
        await supertest(app).get('/students?min=3&max=10')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(8);
            });
    });

});