// Will return true if input is an integer or not, whether it's a number type or an integer in string
function isNumber(input) {
    return !isNaN(input) && !input.toString().includes(' ');
};


module.exports = isNumber;