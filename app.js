// import code for Express
const express = require('express');
const repeatNTimesWithSpace = require('./utils/stringUtils');

// initialize app
const app = express();

const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController');

// Whenever an address comes in with the '/students' path, it will be routed over to the studentsController 
app.use('/students', studentsController);
app.use('/names', namesController);

// route
app.get('/', (request, response) => {
    response.send("Hello World!");
});


// exporting our app
module.exports = app;


// We will have many routes in our back end. We don't want to crowd our app.js with all of these 
// routes, so we'll set up a Router or Routes Controller. 