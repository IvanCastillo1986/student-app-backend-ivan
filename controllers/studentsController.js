const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');


// Everytime our server gets contacted, there must be a response
// For every response, there must be a request
// Gets all students
controller.get('/', (req, res) => {
    try {

        let { min, max, limit } = req.query
        min = Number(min)
        max = Number(max)
        limit = Number(limit)

        
        if (limit) {
            // Here, it was failing a test because I was assigning another variable name to the same
            // object, but objects are stored as passed by reference. So every time this file was parsed
            // it would always start with the original studentData object we're requiring, then it would
            // reference the same allocation of space in memory (the original object).
            // So instead, I needed to spread the object's contents in order to make a real copy.
            let numOfStudents = {...studentData}
            numOfStudents.students = numOfStudents.students.slice(0, limit)
            res.json(numOfStudents)
        } 
        else if (min && max) {
            const studentsArr = []
            for (let student of studentData.students) {
                if (Number(student.id) >= min && Number(student.id) <= max) {
                    studentsArr.push(student);
                }
            };
            studentData.students = studentsArr
            res.json(studentData)
        }
        else {
            res.json(studentData);
        }
    } catch (err) {
        res.send("Error with url path");
    };
});

// Modify this API so that it takes a min and max id and returns all students by id in that range.
// Ex:  '/students?min=3&max=10' => all students with id >= 3 && id <= 10


// Jordan's version
// controller.get('/', (req, res) => {
//     let { limit = 25 } = req.query;

//     limit = Number(limit);
//     let studentDataForDelivery = {...studentData};
//     studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit)
//     res.json(studentDataForDelivery);
// })

// write a route that accepts a student id as part of the path, returning an object (JSON), representing the student with that id
// Gets one student
controller.get('/:id', (req, res) => {
    try {
        const studentId = req.params.id;
        
        if (typeof Number(studentId) !== 'number') {
            res.send("student id must be integer");
        }
        
        const singleStudent = studentData.students.find(student => {
            return studentId === student.id;
        });
        
        if (singleStudent) {
            res.json(singleStudent);
        } else {
            res.status(404).send("Student not found");
        }
    } catch(err) {
        res.status(500).send("An error has occurred");
    }
});






// So the idea here is whenever you're developing a new feature, instead of trying to do everything at once,
// like set up your schema and make sure your tables are right and everything else, especially if you're 
// not 100% sure what that data will look like, set up a file. Something like studentData, which shows
// a semblence of what you want that data to look like, start to get your routes into place, and then as
// that coalesces, into something that makes sense, then say "ok, now I'm going to go ahead and set this
// up in my database."



module.exports = controller;