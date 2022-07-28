// We are going to seperate our SQL queries from our routes. 
// For organizational purposes, we made a folder called 'queries' with this file

// First, we bring in our connection to the database
const db = require("../db/dbConfig.js")

// Next, let's write our first function that will have a sql query
// We want to set up a try/catch block so that if we have a problem, we can likely get a more informative error
// IMPORTANT: this will be an async function. We need to be sure we wait for the response from the 
// database before we try to return a value, and don't halt our code while we wait

// .any() means it will accept any return from the database, no rows, one row, multiple rows of data
const getAllStudents = async () => {
    try {
        const allStudents = await db.any("SELECT * FROM students")
        return allStudents
    } catch (error) {
        return error
    }
}

const getOneStudent = async (id) => {
    try {
        const singleStudent = await db.oneOrNone('SELECT * FROM students WHERE id = $1', id)
        return singleStudent
    } catch (error) {
        return error
    }
}

const createStudent = async (student) => {
    try {
        if (!student.firstName) {
            throw 'You must specify a value for "name"';
        }

        const {firstName, lastName, email, company, pic, city, skill} = student;

        const newStudent = await db.one(
            'INSERT INTO students (firstName, lastName, email, company, pic, city, skill) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [firstName, lastName, email, company, pic, city, skill]
        );
        return newStudent;
    } catch (err) {
        return err;
    }
}

const deleteStudent = async (id) => {
    try {
        const deletedStudent = await db.one('DELETE FROM students WHERE id = $1 RETURNING *', id);
        return deletedStudent;
    } catch (err) {
        return err;
    }
};

const updateStudent = async (studentId, student) => {
    try {
        const {firstName, lastName, email, company, pic, city, skill} = student
        const updatedStudent = await db.one(
            'UPDATE students SET firstname=$1, lastname=$2, email=$3, company=$4, pic=$5, city=$6, skill=$7 WHERE id=$8 RETURNING *',
            [firstName, lastName, email, company, pic, city, skill, studentId]
            );
        return updatedStudent;
    } catch (err) {
        return err
    }
};

module.exports = { getAllStudents, getOneStudent, createStudent, deleteStudent, updateStudent };