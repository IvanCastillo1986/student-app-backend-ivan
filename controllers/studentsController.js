const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');
// IMPORTANT!  When using the studentData object in a queries route, deep copy the object and students array so that you do 
// not mutate the data on each call!
const { getAllStudents } = require("../queries/students.js")

controller.get('/', async (req, res) => {
    const allStudents = await getAllStudents();
    res.json(allStudents);
});

// Everytime our server gets contacted, there must be a response
// For every response, there must be a request
// Gets all students 
controller.get('/', (req, res) => {
    try {
        let { min, max, limit } = req.query;
        min = Number(min);
        max = Number(max);
        limit = Number(limit);

        if (limit) {
            // Here, it was failing a test because I was assigning another variable name to the same
            // object, but objects are stored as passed by reference. So every time this file was parsed
            // it would always start with the original studentData object we're requiring, then it would
            // reference the same allocation of space in memory (the original object).
            // So instead, I needed to spread the object's contents in order to make a real copy.
            let numOfStudents = {...studentData};
            numOfStudents.students = numOfStudents.students.slice(0, limit);
            res.json(numOfStudents);
        } 
        else if (min && max) {
            const studentsArr = [];
            for (let student of studentData.students) {
                if (Number(student.id) >= min && Number(student.id) <= max) {
                    studentsArr.push(student);
                }
            };
            // This line of code was mutating the studentData object. This means that after using the min/max query, and then 
            // calling the /students route, our studentData.students array now has the previous query number of students!
            // studentData.students = studentsArr
            res.json(studentsArr);
        }
        else {
            res.json(studentData);
        }
    } catch (err) {
        res.send("Error with url path");
    };
});


// Jordan's version
// controller.get('/', (req, res) => {
//     let { limit = 25 } = req.query;

//     limit = Number(limit);
//     let studentDataForDelivery = {...studentData};
//     studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit)
//     res.json(studentDataForDelivery);
// })


// Gets one student
controller.get('/:id', (req, res, next) => {
    if (!isNaN(req.params.id)) {

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
        
    } else {
        next();
    }
});


// Write a route that finds student based on fullName
// Ex:  app.com/students/ivancastillo
controller.get('/:fullName', (req, res) => {
    const { fullName } = req.params
    
    if (isNaN(fullName)) {

        try {
            
            for (let student of studentData.students) {
                let fullStudentName = student.firstName + student.lastName;
                
                if (fullName.toLowerCase() === fullStudentName.toLowerCase()) {
                    return res.json(student);
                }
            };
            res.send('student name not found');
        } catch (err) {
            res.send('Error with path');
        };
    } else {
        next();
    }
});


// Write a route to get the grade average of a student by their id
// Ex:  app.com/students/3/gradeAverage
controller.get('/:id/gradeAverage', (req, res) => {
    const { id } = req.params;

    const grades = studentData.students.find(student => student.id === id).grades;

    let sum = 0;
    let gradeSum = grades.reduce((prev, curr) => {
        return Number(prev) + Number(curr);
    }, sum);

    res.json({
        message: "The student's grade average is " + gradeSum / grades.length
    });
});


// Get all students sorted by their last name


// Write tests for these new routes



// So the idea here is whenever you're developing a new feature, instead of trying to do everything at once,
// like set up your schema and make sure your tables are right and everything else, especially if you're 
// not 100% sure what that data will look like, set up a file. Something like studentData, which shows
// a semblence of what you want that data to look like, start to get your routes into place, and then as
// that coalesces, into something that makes sense, then say "ok, now I'm going to go ahead and set this
// up in my database."


/* 
Middleware 

Middleware functions are functions that have access to the request object (req), the response object (res),
and the next function in the application's request-response cycle. The next function is a function in the 
Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:
Execute any code
Make changes to the request and the response objects
End the request-response cycle
Call the next middleware in the stack

If the current middleware function does not end the request-response cycle, it must call next() to pass control 
to the next middleware function. Otherwise, the request will be left hanging.

*/ 


module.exports = controller;