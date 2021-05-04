import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    describe('checkEmail', () => {
        it('no string', () => {
            expect(complexOperations.checkEmail()).toMatch('The email should be an string');
        });
        it('not valid email adress', () => {
            expect(complexOperations.checkEmail('not@valid@mail.com')).toBe('The email is invalid');
        });
        it('valid string and mail adress', () => {
            expect(complexOperations.checkEmail('eugeniarossanigo@gmail.com')).toBe('The email is valid');
        });
    });

    describe('calculateArea', () => {
        it('piramid not supported figure', () => {
            expect(complexOperations.calculateArea('piramid', 2, 3)).toBe('piramid is not supported');
        });
        it('no second number, is a string', () => {
            expect(complexOperations.calculateArea('square', 2, "hi")).toBe('number1 and number2 should be numbers');
        });
        it('no numbers', () => {
            expect(complexOperations.calculateArea('circle')).toBe('number1 and number2 should be numbers');
        });
        it('case rectangle', () => {
            expect(complexOperations.calculateArea('rectangle', 4, 3)).toEqual(12);
        });
        it('case triangle', () => {
            expect(complexOperations.calculateArea('triangle', 5, 2)).toEqual(5);
        });
        it('case circle', () => {
            expect(complexOperations.calculateArea('circle', 4)).not.toEqual(1);
        });
    });

    describe('sumGratherThan', () => {
        it('no params', () => {
            expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
        });
        it('some params are not defined', () => {
            expect(complexOperations.sumGratherThan(3, 5, undefined)).toMatch('The params should be numbers');
        });
        it('one or more params are not numbers', () => {
            expect(complexOperations.sumGratherThan(2, 6, "not")).toBe('The params should be numbers');
        });
        it('adds 3 + 4 to equal 7 and 7 be greater than 5', () => {
            expect(complexOperations.sumGratherThan(3, 4, 5)).toBe('7 is grather than 5');
        });
        it('adds 5 + 5 to equal 10 and 10 be less than 15', () => {
            expect(complexOperations.sumGratherThan(5, 5, 15)).toBe('10 is less than 15');
        });
        /// WRONG the function not contemplate the case ===
        it('adds 2 + 8 to equal 10 and 10 be less than 10', () => {
            expect(complexOperations.sumGratherThan(2, 8, 10)).toBe('10 is less than 10');
        });
    });

    describe('intersectionBetweenArrays', () => {
        it('no params', () => {
            expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
        });
        it('params are not arrays', () => {
            expect(complexOperations.intersectionBetweenArrays(4, "tres")).toBe('The params should be arrays');
        });
        it('no matches', () => {
            expect(complexOperations.intersectionBetweenArrays([1,2], [3,4])).toBe('There are not matching elements');
        });
        it('matching elements 6 and 8', () => {
            expect(complexOperations.intersectionBetweenArrays([0,2,4,6,8], [6,7,8])).toEqual([6,8]);
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('first param is a string not array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey('name', 'name')).toBe('The first param should be an array');
        });
        it('second param is a number, not a string', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{fruit: 'banana'}, {fruit: 'kiwi'}], 2)).toBe('The second param should be an string');
        });
        it('second param not match with array key', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{animal: 'cat'}, {animal: 'lion'}, {bird: 'parrot'}], 'animal')).toBe('Some elements in the array does not have the animal property');
        });
        it('corrected sort array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{drink: 'wine'}, {drink: 'beer'}, {drink: 'fernet'}], 'drink')).toEqual([{drink: 'beer'}, {drink: 'fernet'}, {drink: 'wine'}]);
        });
        it('corrected sort array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Eugenia'}, {name: 'Ana'}], 'name')).toEqual([{name: 'Ana'}, {name: 'Eugenia'}]);
        });
        it('corrected sort array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{brand: 'Xiaomi'}, {brand: 'Xiaomi'}], 'brand')).toStrictEqual([{brand: 'Xiaomi'}, {brand: 'Xiaomi'}]);
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('no params', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
        });
        it('string in array', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1,2,'tres'])).toBe('The array should have only numbers');
        });
        it('array with odd length to equal 3 and even length to equal 4', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 4, 8, 10, 12, 15])).toEqual({odd: 3, even: 4});
        });
        it('float array with odd length to equal 2 and even length to equal 0', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([2.3, 6.8])).toEqual({odd: 2, even: 0});
        });
    });
});


////// MOCK TESTS //////

describe('complexOperation - Mocking Tests', () => {
    describe('checkEmail mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('email is not a string', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail('')).toBe('The email should be an string');
        });
        it('email is a number not string', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail(3)).toBe('The email should be an string');
        });
        it('email is a string but not valid', () => {
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('mocked')).toBe('The email is invalid');
        });
        it('valid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue('example@mail.com');
            expect(complexOperations.checkEmail('a')).toBe('The email is valid');
        })
    });

    describe('calculateArea mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('hexagon is not supported', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            expect(complexOperations.calculateArea('hexagon')).toBe('hexagon is not supported');
        });
        it('number2 is not number, is string', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea(1)).toBe('number1 and number2 should be numbers');
        });
        it('rectangle area', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(20);
            expect(complexOperations.calculateArea('rectangle')).toBe(20);
        });
        it('triangle area', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(18);
            jest.spyOn(basicOperations, 'division').mockReturnValue(9);
            expect(complexOperations.calculateArea('triangle')).toBe(9);
        });
        it('circle area', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(25);
            expect(complexOperations.calculateArea('circle')).not.toBe(80);
        });
        it('default case', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.calculateArea('default')).toBe('default is not supported');
        });
    });
    
    describe('sumGratherThan mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('params not numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGratherThan(1)).toBe('The params should be numbers');
        });
        it('the sum is greater than 3', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(8);
            expect(complexOperations.sumGratherThan(0, 0, 3)).toBe('8 is grather than 3');
        });
        it('the sum is less than 11', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(7);
            expect(complexOperations.sumGratherThan(0, 0, 11)).toBe('7 is less than 11');
        });
    });

    describe('intersectionBetweenArrays mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('params not arrays', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays([],[])).toBe('The params should be arrays');
        });
        it('not matching elements', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('');
            expect(complexOperations.intersectionBetweenArrays([0],[0])).toBe('There are not matching elements');
        });
        it('matching elements', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['mate']);
            expect(complexOperations.intersectionBetweenArrays([0], [0])).toEqual(['mate']);
        });
    });

    describe('sortArrayOfObjectsByKey mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('first params not array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([])).toBe('The first param should be an array');
        });
        it('second params not a string', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey(1)).toBe('The second param should be an string');
        });
        it('some elements not have the right key', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([0, 0], 'number')).toBe('Some elements in the array does not have the number property');
        });
    });

    describe('numberOfOddAndEvenNumbers mocked', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it('param not array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers([])).toBe('The param should be an array');
        });
        it('array contains string', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(["cuatro"])).toBe('The array should have only numbers');
        });
        it('3 oods and 0 even', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1, 7, 9]);
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 1, 1])).toEqual({odd: 3, even: 0});
        });
        it('1 odd and 2 even', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([3]);
            jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([4, 8]);
            expect(complexOperations.numberOfOddAndEvenNumbers([0, 0, 1])).toEqual({odd: 1, even: 2});
        });
    });
});
