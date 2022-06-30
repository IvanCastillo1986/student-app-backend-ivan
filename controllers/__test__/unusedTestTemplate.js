// const app = require('../../app.js');
// const supertest = require('supertest');
// // supertest is built on top of jest. But jest doesn't know enough to handle calls to an API,
// // so supertest takes jest (because jest already has all these cool methods like describe and it)
// // and it adds a few more methods that make it possible to test requests and retreive from a server.


// describe("returns JSON data for all students", () => {
//     // This function needs to be async, since any call to a server takes time, much like in front end
//     it("returns an object with all students", async () => {
//         // Each test needs to be awaited, since it needs to wait for information
//         // supertest will ask which 'app' to start, and we give it our (app) variable that we've required
//         // you will then tell it which request. This will be a .get() request to "/students"
//         // then, we start to put our expectations in place.
//         // Status of 200 (we don't expect any errors)
//         // So:  startup the app ( await supertest(app) ), send a request ( .get("/students") )
//         await supertest(app).get("/students")
//             .expect(200)
//             .then((response) => {
//                 expect(response.body.students[0].firstName).toBe('Ingaberg');
//             }); 
//     });
// });