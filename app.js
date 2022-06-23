// import code for Express
const express = require('express');

// initialize app
const app = express();

const studentsController = require('./controllers/studentsController')

// Whenever an address comes in with the '/students' path, it will be routed over to the studentsController 
app.use('/students', studentsController)

// route
app.get('/', (request, response) => {
    response.send("Hello World!");
});


// exporting our app
module.exports = app;


// We will have many routes in our back end. We don't want to crowd our app.js with all of these 
// routes, so we'll set up a Router or Routes Controller. 