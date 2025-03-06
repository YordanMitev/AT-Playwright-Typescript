// Homework: Interfaces and Objects

// Task 1. Create a TypeScript interface named Person that represents a person with the following properties:
// name (string), lastName (string), age (number), email (string), phoneNumber (number)

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
  }

// Task 2. Create a TypeScript interface named PersonInfo that Extends Person type from the previous exercise and add the following properties:
//country (optional string property), greeting (optional method that return welcome message)

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
  }

  
// Task 3. Create an object of type Person using the interface from Exercise 1. Declare a variable person1 of type Person.

const person1: Person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phoneNumber: 1234567890,
  };

// Task 4. Create an object of type PersonInfo using the interface from Exercise 2. Declare a variable person2 of type PersonInfo.

const person2: PersonInfo = {
    name: "Jane",
    lastName: "Smith",
    age: 25,
    email: "jane.smith@example.com",
    phoneNumber: 9876543210,
    country: "USA",
    greeting: function () {
      return `Welcome, ${this.name} ${this.lastName}!`;
    },
  };


  if(person2.greeting){
      console.log(person2.greeting())
  }

