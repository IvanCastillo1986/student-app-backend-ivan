const express = require('express');
const controller = express.Router()

const studentData = require('../studentData.json')


// Everytime our server gets contacted, there must be a response
// For every response, there must be a request
controller.get('/', (req, res) => {
    res.json(studentData)
})

// write a route that accepts a student id as part of the path, returning an object (JSON), representing the student with that id
controller.get('/:id', (req, res) => {
    try {

        const studentId = req.params.id;
        
        if (typeof Number(studentId) !== 'number') {
            res.send("student id must be integer")
        }
        
        const singleStudent = studentData.students.find(student => {
            return studentId === student.id;
        });
        
        if (singleStudent) {
            res.json(singleStudent);
        } else {
            res.status(404).send("Student not found")
        }
    } catch(err) {
        res.status(500).send("An error has occurred")
    }
});




// So the idea here is whenever you're developing a new feature, instead of trying to do everything at once,
// like set up your schema and make sure your tables are right and everything else, especially if you're 
// not 100% sure what that data will look like, set up a file. Something like studentData, which shows
// a semblence of what you want that data to look like, start to get your routes into place, and then as
// that coalesces, into something that makes sense, then say "ok, now I'm going to go ahead and set this
// up in my database."



module.exports = controller;