const app = require('../../app.js');
const supertest = require('supertest');


describe("Returns JSON data for all students", () => {
    
    it("returns an object with all students", async () => {
        await supertest(app).get('/students')
            .expect(200)
            .then((response) => {
                // response.body is equal to the studentData object from our controller
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students[0].firstName).toBe("Ingaberg");
                expect(response.body.students.length).toBe(25);
            });
    });

    it("returns an object with a number of students equal to or less than a limit", async () => {
        await supertest(app).get('/students?limit=10')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(10);
            });

        await supertest(app).get('/students?limit=35')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(25);
            });
    });

    it("returns an object with students whose id >= min and id <= max", async () => {
        await supertest(app).get('/students?min=3&max=10')
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(8);
                expect(response.body.students[0].city).toBe("Kugesi");
            });
    });

});

describe("returns JSON data for specific students", () => {

    it("returns an object with student that matches id", async () => {
        await supertest(app).get('/students/3')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Object);
                expect(response.body.company).toBe("Skalith");
            });
    });

    it("returns an object with student that matches full name in path", async () => {
        await supertest(app).get('/students/laurensromanet')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Object);
                expect(response.body.firstName).toBe("Laurens");
            });
    });

    it("returns a message with the student at given id's grade average", async () => {
        await supertest(app).get('/students/3/gradeAverage')
            .expect(200)
            .then((response) => {
                expect(response.body.message).toBe("The student's grade average is 85.75")
            })
    })

});