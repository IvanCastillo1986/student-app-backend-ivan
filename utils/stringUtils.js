function repeatNTimesWithSpace(string, n) {
    if (!string) return ''

    let arr = new Array(n).fill(string)

    return arr.join(' ')
};

function capitalizeFirstLetter(string) {
    if (!string) return ''
    return string[0].toUpperCase() + string.slice(1);
};

function capitalizeFirstLetterOfWords(string) {
    if (!string) return ''
    
    const wordsArr = string.split(' ');
    const newArr = [];
    
    for (word of wordsArr) {
        word = word[0].toUpperCase() + word.slice(1);
        newArr.push(word);
    };

    return newArr.join(' ');
}


module.exports = {repeatNTimesWithSpace, capitalizeFirstLetter, capitalizeFirstLetterOfWords};