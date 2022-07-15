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

module.exports = { getAllStudents }