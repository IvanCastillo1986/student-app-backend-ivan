const express = require('express');
const repeatNTimesWithSpace = require('../utils/stringUtils');
const controller = express.Router();
const isNumber = require('../utils/isNumber.js') // this wouldn't work without assigning to variable
require('../utils/stringUtils.js') // this works without assigning to variable
// This must be because of the way the require() method works. 
// isNumber.js has the same name as the isNumber function. I think this is why.


controller.get('/', (req, res) => {
    console.log('names page');
    console.log(repeatNTimesWithSpace)
    res.send('names page');
});


controller.get('/:name/:times', (req, res) => {
    try {

        // get name
        const name = req.params.name
        // get times
        const times = req.params.times
        // get result of repeatNTimesWithSpace
        if (isNumber(times)) {
            const result = repeatNTimesWithSpace(name, times);
            // send string response as result
            res.send(result);
        } else {
            res.send('must include names/name/number')
        }
    } catch (err) {
        res.send('There was an error');
    }

});

module.exports = controller;