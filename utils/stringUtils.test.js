const { repeatNTimesWithSpace, capitalizeFirstLetter, capitalizeFirstLetterOfWords } = require('./stringUtils');


describe("take a string and number and repeat string same number of times seperated by spaces", () => {

    it("handles an empty string", () => {
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        expect(repeatNTimesWithSpace('', 5)).toBe('');
    }); 

    it("handles a string with one or more characters", () => {
        expect(repeatNTimesWithSpace('a', 1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 7)).toBe('a a a a a a a');
        expect(repeatNTimesWithSpace('ab', 3)).toBe('ab ab ab');
    }); 
}); 

describe("takes a string and capitalizes the first letter", () => {

    it("handles an empty string", () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    it("uppercases first letter of a first string", () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
        expect(capitalizeFirstLetter('howdy')).toBe('Howdy');
        expect(capitalizeFirstLetter('hey there partner')).toBe('Hey there partner');
    });
});

describe("takes in a string and capitalizes the first letter of each word", () => {
    
    it("handles an empty string", () => {
        expect(capitalizeFirstLetterOfWords('')).toBe('');
    });

    it("uppercases the first letter of each word in string", () => {
        expect(capitalizeFirstLetterOfWords("cowboy")).toBe("Cowboy")
        expect(capitalizeFirstLetterOfWords("i'm a cowboy")).toBe("I'm A Cowboy")
    })
});
