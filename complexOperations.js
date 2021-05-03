import {
    isString,
    isArray,
    isNumber,
    validateEmail,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    sum,
    multip,
    division,
    exponent,
    arrayIntersection,
    sortArrayByKey,
    getOddNumbersFromArray,
    getEvenNumbersFromArray,
} from './basicOperations';
  
/**
   * This function validates emails
   * @param {string} email
   * @returns {string}
*/
export const checkEmail = (email) => {
    if (!email || !isString(email)) {
        return 'The email should be an string';
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
        return 'The email is invalid';
    }
    return 'The email is valid';
};
  
// console.log(checkEmail());
// console.log(checkEmail(''));
// console.log(checkEmail('@'));
// console.log(checkEmail('test@.com'));
// console.log(checkEmail('test@radiumrocket.com'));
  
/**
   * Calculate area of a figure
   * @param {string} figure
   * @param {number} number1
   * @param {number} number2 - It's not necessary for circle
   * @returns {number|string}
*/
export const calculateArea = (figure, number1, number2 = 0) => {
    if (!figure || !isSupportedFigure(figure)) {
        return `${figure} is not supported`;
    }
    if (!isNumber(number1) || !isNumber(number2)) {
        return 'number1 and number2 should be numbers';
    }
    switch(figure.toLowerCase()) {
        case 'rectangle':
        case 'square':
            return multip(number1, number2);
        case 'triangle':
            return division(multip(number1, number2), 2);
        case 'circle':
            // For circle we use only the number1 as radio
            const radio = number1;
            return Math.PI * exponent(radio, 2);
        default:
            return `${figure} is not supported`;
    }
}
  
// console.log(calculateArea());
// console.log(calculateArea('square'));
// console.log(calculateArea('square', 'hola', 3));
// console.log(calculateArea('square', 3, 'hola'));
// console.log(calculateArea('square', 3, 3));
// console.log(calculateArea('rectangle', 3, 4));
// console.log(calculateArea('triangle', 5, 4));
// console.log(calculateArea('square', 5)); // number two takes 0 as default value
// console.log(calculateArea('circle', 4)); // number two takes 0 as default value

/**
   * This function sum two numbers and detects if the result if grather than the third number
   * @param {number} number1
   * @param {number} number2
   * @param {number} number3
   * @returns {string}
*/
export const sumGratherThan = (number1, number2, number3) => {
    if (!isNumber(number1) || !isNumber(number2) || !isNumber(number3)) {
        return 'The params should be numbers';
    }
    const sumResult = sum(number1, number2);
    if (sumResult > number3) {
        return `${sumResult} is grather than ${number3}`;
    }
    return `${sumResult} is less than ${number3}`;
}
  
// console.log(sumGratherThan());
// console.log(sumGratherThan([], undefined));
// console.log(sumGratherThan(1, 5, 10));
// console.log(sumGratherThan(1, 5, 5));

/**
   * This function returns the intersection between two arrays
   * @param {Array} array1
   * @param {Array} array2
   * @returns {Array|string}
*/
export const intersectionBetweenArrays = (array1, array2) => {
    if (!isArray(array1) || !isArray(array2)) {
        return 'The params should be arrays';
    }
    const intersection = arrayIntersection(array1, array2);
    if (intersection.length === 0) {
        return 'There are not matching elements';
    }
    return intersection;
}
  
// console.log(intersectionBetweenArrays())
// console.log(intersectionBetweenArrays([1,2,3]));
// console.log(intersectionBetweenArrays([1,2,3], [1]));
// console.log(intersectionBetweenArrays([1,2,3], [5]));
// console.log(intersectionBetweenArrays(['test',2,3], ['test', 5]));

/**
   * Sort an array based on an specific key
   * @param {Array} array - This array should be an array of objects
   * @param {string} key
   * @returns {Array} - Sorted array
*/
export const sortArrayOfObjectsByKey = (array, key) => {
    if (!isArray(array)) {
        return 'The first param should be an array';
    }
    if (!key || !isString(key)) {
        return 'The second param should be an string';
    }
    if (!arrayElementsAreObjectWithKey(array, key)) {
        return `Some elements in the array does not have the ${key} property`;
    }
    return sortArrayByKey(array, key);
}
  
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 'name'));
// console.log(sortArrayOfObjectsByKey(undefined, 'name'));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 1));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], ''));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName' }], 'name'));

/**
   * Should return the number of odd and even numbers
   * @param {Array} array
   * @returns {Object|string} - odd and even numbers
*/
export const numberOfOddAndEvenNumbers = (array) => {
    if (!isArray(array)) {
        return 'The param should be an array';
    }
    const elementsAreNumbers = array.every(isNumber);
    if (!elementsAreNumbers) {
        return `The array should have only numbers`;
    }
    return {
        odd: getOddNumbersFromArray(array).length,
        even: getEvenNumbersFromArray(array).length
    }
}
  
// console.log(numberOfOddAndEvenNumbers([1, 4, 5, 8, 9]));
// console.log(numberOfOddAndEvenNumbers([1.3, 4.2]));
// console.log(numberOfOddAndEvenNumbers());
// console.log(numberOfOddAndEvenNumbers([1, 'string']));