// task_1 
const sayHello1 = function (name) {
    if (typeof name !== 'string') return 'Error';
    else if (name === 'Mark') return `Hi, ${name}!`;
    return `Hello, ${name}!`;
}

console.log(sayHello1('Mark'));

const sayHello2 = (name) => {
    if (typeof name !== 'string') return 'Error';
    else if (name === 'Mark') return `Hi, ${name}!`;
    return `Hello, ${name}!`;
}

console.log(sayHello2('Sasha'));

// task_2
const calcHypotenuse1 = function (n, m) {
    if (typeof n !== 'number' || typeof m !== 'number' || n <= 0 || m <= 0) return 'You need to use only positive numbers, mate!';
    return (n**2 + m**2)**(1/2);
}

console.log(calcHypotenuse1(3, 4));

const calcHypotenuse2 = (n, m) => {
    if (typeof n !== 'number' || typeof m !== 'number' || n <= 0 || m <= 0) return 'You need to use only positive numbers, mate!';
    return (n**2 + m**2)**(1/2);
}

console.log(calcHypotenuse2(5, 12));

// task_3

const min1 = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'You have to use only numbers';
    else if (a > b) return b;
    else if (a === b) return 'These numbers are equal';
    return a;
}

console.log(min1(-6, -4));

const min2 = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return 'You have to use only numbers';
    else if (a > b) return b;
    else if (a === b) return 'These numbers are equal';
    return a;
}

console.log(min2(9, 9));

// task_3 (one more solution)

const min3 = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'You have to use only numbers';
    else if (a === b) return 'These numbers are equal';
    return min = Math.min(a, b);
}

console.log(min3(3, -3));

const min4 = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return 'You have to use only numbers';
    else if (a === b) return 'These numbers are equal';
    return min = Math.min(a, b);
}

console.log(min4(10, 10));

// task_4

const isEven1 = function (n) {
    if (typeof n !== 'number') return 'You have to use only numbers';
    else if (n % 2 === 0) return true;
    return false;
}

console.log(isEven1(8));

const isEven2 = (n) => {
    if (typeof n !== 'number') return 'You have to use only numbers';
    else if (n % 2 === 0) return true;
    return false;
}

console.log(isEven2(7));

// task_5

const deleteChars1 = function (str) {
    if (typeof str !== 'string') return 'Enter string value';
    return str.slice(1, str.length-1);
}

console.log(deleteChars1('Hello'));

const deleteChars2 = (str) => {
    if (typeof str !== 'string') return 'Enter string value';
    return str.slice(1, str.length-1);
}

console.log(deleteChars2('A'));

// task_6

const getCorrectedWord1 = function (str) {
    if (typeof str !== 'string') return 'Enter string value';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(getCorrectedWord1('пиТеР'));

const getCorrectedWord2 = (str) => {
    if (typeof str !== 'string') return 'Enter string value';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(getCorrectedWord2('javaScript'));

// task_9 

const getNewString1 = function (str, n) {
    if (typeof str !== 'string' || typeof n !== 'number') return 'Enter correct values';
    else if (str.length > n) return str.substr(0, n) + '...';
    return str;
}

console.log (getNewString1('Привет мир!', 6));

const getNewString2 = (str, n) => {
    if (typeof str !== 'string' || typeof n !== 'number') return 'Enter correct values';
    else if (str.length > n) return str.substr(0, n) + '...';
    return str;
}

console.log (getNewString2('Привет мир!', 11));


