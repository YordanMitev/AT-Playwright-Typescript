
// ===================== Exercise 1: Check if a number is even or odd =====================
// Step 1: Declare a variable `num` and assign any number to it.
let num: number = 12;

// Step 2: Declare a variable `isEven` and use a logical expression to check if `num` is even.
let isEven: boolean = num % 2 === 0;

// Step 3: Log the result
console.log(`Exercise 1: Is ${num} even? - ${isEven}`);


// ===================== Exercise 2: Check if a string has more than 10 characters =====================

// Step 1: Declare a variable `text` and assign any string to it.
let text: string = "text";

// Step 2: Declare a variable `isLong` and check if the length of `text` is greater than 10.
let isLong: boolean = text.length > 10;

// Step 3: Log the result
console.log(`Exercise 2: Is "${text}" longer than 10 characters? - ${isLong}`);


// ===================== Exercise 3: Verify if a number is positive =====================

// Step 1: Declare a variable `number` and assign any number to it.
let num2: number = 7;

// Step 2: Declare a variable `isPositive` and check if `number` is greater than 0.
let isPositive: boolean = num2 > 0;

// Step 3: Log the result
console.log(`Exercise 3: Is ${num2} positive? - ${isPositive}`);


// ===================== Exercise 4: Determine if a number is negative or zero =====================

// Step 1: Declare a variable `numCheck` and assign any number to it.
let numCheck: number = -3;

// Step 2: Declare a variable `isNonPositive` and check if `numCheck` is less than or equal to 0.
let isNonPositive: boolean = numCheck <= 0;

// Step 3: Log the result
console.log(`Exercise 4: Is ${numCheck} negative or zero? - ${isNonPositive}`);


// ===================== Exercise 5: Check if a string is empty =====================

// Step 1: Declare a variable `message` and assign any string to it.
let messageOne: string = "Dani";

// Step 2: Declare a variable `isEmpty` and check if `message` is an empty string.
let isEmpty: boolean = messageOne === "";

// Step 3: Log the result
console.log(`Exercise 5: Is the message empty? - ${isEmpty}`);


// ===================== Exercise 6: Determine if a number is within a range (10 to 100 inclusive) =====================

// Step 1: Declare a variable `rangeNumber` and assign any number to it.
let rangeNumber: number = 55;

// Step 2: Declare a variable `isInRange` and check if `rangeNumber` is between 10 and 100 (inclusive).
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;

// Step 3: Log the result
console.log(`Exercise 6: Is ${rangeNumber} in the range [10, 100]? - ${isInRange}`);


// ===================== Exercise 7: Check if a number is either 0 or 100 =====================

// Step 1: Declare a variable `specialNumber` and assign any number to it.
let specialNumber: number = 100;

// Step 2: Declare a variable `isZeroOrHundred` and check if `specialNumber` is either 0 or 100.
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;

// Step 3: Log the result
console.log(`Exercise 7: Is ${specialNumber} either 0 or 100? - ${isZeroOrHundred}`);


// ===================== Exercise 8: Verify if a boolean value is true =====================

// Step 1: Declare a variable `flag` and assign a boolean value.
let flag: boolean = true;

// Step 2: Declare a variable `isTrue` and check if `flag` is true.
let isTrue: boolean = flag === true;

// Step 3: Log the result
console.log(`Exercise 8: Is the flag true? - ${isTrue}`);


// ===================== Exercise 9: Check if a number is odd and greater than 50 =====================

// Step 1: Declare a variable `oddCheck` and assign any number to it.
let oddCheck: number = 73;

// Step 2: Declare a variable `isOddAndLarge` and check if `oddCheck` is odd and greater than 50.
let isOddAndLarge: boolean = oddCheck % 2 !== 0 && oddCheck > 50;

// Step 3: Log the result
console.log(`Exercise 9: Is ${oddCheck} odd and greater than 50? - ${isOddAndLarge}`);


// ===================== Exercise 10: Determine if a string starts with the letter 'A' =====================

// Step 1: Declare a variable `word` and assign any string to it.
let word: string = "Apple";

// Step 2: Declare a variable `startsWithA` and check if `word` starts with 'A'.
let startsWithA: boolean = word.startsWith("A");

// Step 3: Log the result
console.log(`Exercise 10: Does "${word}" start with 'A'? - ${startsWithA}`);
