// ==================== Homework: Arrays & Functions ====================


// 1. Create an array of strings and add a new element at the end of the array. Log the result.
let carModels: string[] = ["Honda", "Toyota", "Audi", "Acura", "Mercedes"];
carModels.push("Reno");
console.log("Task-1 Added a record at the end of the array:", carModels);

// 2. Create an array of numbers and remove the first element from the array. Log the result.
let colors: string[] = ["red", "green", "blue", "yellow", "white", "black"];
colors.shift();
console.log("Task-2 Removed a record from the beginning of the array:", colors);

// 3. Use the map method to create a new array and divide each number by 2 “num / 2” from [1, 2, 3, 4, 5].  Log the result.
let numbers: number[] = [1, 2, 3, 4, 5];
let dividedNumbers: number[] = numbers.map((element) => element / 2);
console.log("Task-3 Divided numbers:", dividedNumbers);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let numbersForFilter: number[] = [3, 7, 1, 9, 12, 4];
let filter = numbersForFilter.filter((element) => element > 5);
console.log("Task-4 Filtered array:", filter);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let numbersToSort: number[] = [9, 3, 7, 2, 8, 5];
numbersToSort.sort((a, b) => a - b);
console.log("Task-5 Sorted array in ascending order:", numbersToSort);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let fruits2: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let firstThreeFruits: string[] = fruits2.slice(0, 3);
console.log("Task-6 First three fruits from the array:", firstThreeFruits);

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let transport: string[] = ["car", "bike", "bus", "train", "boat"];
transport.splice(1, 2);
console.log("Task-7 Elements after the removing:", transport);

// 8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/elsestatement to find the largest number. Log the result.
function findLargest(
  number_1: number,
  number_2: number,
  number_3: number
): number {
  if (number_1 >= number_2 && number_1 >= number_3) {
    return number_1;
  } else if (number_2 >= number_1 && number_2 >= number_3) {
    return number_2;
  } else {
    return number_3;
  }
}
let largestNumber: number = findLargest(15, 8, 22);
console.log("Task-8 Largest number:", largestNumber);

// 9. Write a function “convertToCentimeters”  which receives parameter “inches” and add default value to it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 1): number {
  return inches * 2.54;
}
console.log("Task-9");
console.log("Default value:", convertToCentimeters());

let convertedValue: number = convertToCentimeters(10);
console.log("Passed value:", convertedValue);

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
    if (height === undefined) {
        // It's a square
        return width * width; 
    } else {
        // It's a rectangle
        return width * height; 
    }
}
console.log('Task-10');
console.log('Square:', calculateArea(5));
console.log('Rectangle:', calculateArea(5, 10));