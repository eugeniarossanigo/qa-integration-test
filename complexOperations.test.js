import 'jest';
//const complexOperations = require('./complexOperations');
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
        it('piramid es not supported figure', () => {
            expect(complexOperations.calculateArea('piramid', 2, 3)).toBe('piramid is not supported');
        });
        it('no numbers', () => {
            expect(complexOperations.calculateArea('square', 2, "hi")).toBe('number1 and number2 should be numbers');
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
        // it('case square', () => {
        //     expect(complexOperations.calculateArea('square', -2)).toBe('square is not supported');
        // });
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
    });

    describe('intersectionBetweenArrays', () => {
        it('no params', () => {
            expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
        });
        it('params are not arrays', () => {
            expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
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
            expect(complexOperations.sortArrayOfObjectsByKey([])).toBe('The second param should be an string');
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
            expect(complexOperations.sortArrayOfObjectsByKey([{brand: 'Xiaomi'}, {brand: 'Xiaomi'}], 'brand')).toEqual([{brand: 'Xiaomi'}, {brand: 'Xiaomi'}]);
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('no params', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
        });
        it('string in array', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1,2,'hi'])).toBe('The array should have only numbers');
        });
        it('array with odd length to equal 3 and even length to equal 4', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 4, 8, 10, 12, 15])).toEqual({odd: 3, even: 4});
        });
        it('float array with odd length to equal 2 and even length to equal 0', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([2.3, 6.8])).toEqual({odd: 2, even: 0});
        });
    });
});
