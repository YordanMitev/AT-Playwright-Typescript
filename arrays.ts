// Arrays

let numberArray: number[] = [1, 2, 3, 4];

let stringAndNumsArr: (number | string)[] = [1, "Pesho", "Gosho", 2, "Ivan"];
let booleanArray: boolean[] = [true, false];


let fruits: string[] = ["Apple", "Banana", "Pear", "Peach", "Grape"];
let firtsEl: string = fruits[1];
let secondEl: string = fruits[3];
console.log(firtsEl);
console.log(secondEl);

// Method -----> push() ----- add to the last position an element
fruits.push('Mango')
console.log(fruits)

// Method -----> pop() ----- remove the last position element
numberArray.pop();
console.log(numberArray)

// Method -----> shift() ----- remove the first position element
fruits.shift()
console.log(fruits)

// Method -----> unshift() ----- add to the first position an element
numberArray.unshift(5)
console.log(numberArray)

// Method -----> map() -----

let multiplyNumbers: number[] = numberArray.map(element => element * 2)

console.log(multiplyNumbers)


let multiplySpecialNumbers = numberArray.map((element: number) => {
    if (element > 2) {
      return element * 2;
    } else {
      return element;
    }
  });


// Method -----> filter() ----- filter the elements and give me back the elements greather than 2
let filterNumsArray = numberArray.filter(element => element > 2)
console.log(filterNumsArray)