export const isNumber = number => {
  return typeof number === 'number';
}

export const isArray = array => {
  return Array.isArray(array);
}

export const isString = string => {
  return typeof string === 'string';
}

export const validateEmail = string => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(string);
}

export const sum = (a, b) => {
  return a + b;
}

export const multip = (a, b) => {
  return a * b;
}

export const division = (a, b) => {
  return a / b;
}

export const exponent = (a, b) => {
  return Math.pow(a, b)
}

export const isSupportedFigure = (figure) => {
  const supportedFigures = ['square', 'rectangle', 'triangle', 'circle'];
  return supportedFigures.includes(figure.toLowerCase());
};

export const arrayElementsAreObjectWithKey = (array, key) => {
  return array.every(element => element[key]);
}

export const arrayIntersection = (array1, array2) => {
  return array1.filter(element => array2.includes(element));
};

export const sortArrayByKey = (array, key) => {
  return array.sort((a,b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

export const getEvenNumbersFromArray = (array) => {
  return array.filter(element => element % 2 === 0);
};

export const getOddNumbersFromArray = (array) => {
  return array.filter(element => element % 2 !== 0);
}