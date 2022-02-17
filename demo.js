//hw1
// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10

for (let i = 0; i <= 10; i++){
  if (i % 2 === 0)
  console.log(i);
} 
// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0

 for (let i = 10; i >= 0; i--){
  console.log(i);
} 
// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
let nums = [1,2,3,4,5,6,7,8,9,10]

console.log("even or odd");

for(let a =0; a<=10;a++){
    if (a % 2 === 0) {
        console.log(`even ${a}`);
      } else {
        console.log(`odd ${a}`);
      }
    }

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10

 for (let i = 0; i <= 10; i++){
  console.log(i);
}
// 5. Look closely at the code below

const isOdd = (num) =>{
    return num % 2 === 0
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}

// 6. what will this log?
is Odd
// 7. what is the value of isOdd(2) 
odd
// 8. Fix the isOdd function to make this work

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
for (var i=0; i<=50; i++){ 
	if (i % 2 == 0){
    console.log(i)}
  }
// 2. Write a function that takes an array and returns the sum of all the numbers
const num = [3, 5, 8, 10];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);
// 3. Write a function that returns the number of vowels in string
getCount('michaelphoenix')
function getCount(str) {
  var vowelsCount = 0
  const vowels = ['a','e','i','o','u']
  for (let char of str) {
    if(vowels.includes(char)){
      vowelsCount++
    }
  }
  console.log(vowelsCount)
}
// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"

// 7. write a function that takes an array that removes the first and last items and return that new array
let array =[1,2,3,4]
const swap = (array)=>{
  
  let firstItem = array[0]
  let lastItem = array[array.length-1]
  array[array.length-1] = firstItem
  array[0] = lastItem
}
console.log('array before swap:', array)
swap(array)
console.log('array after swap:', array)
// 8. write a function that swaps the last and first items of an array 
// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
// 11. Write a function that prints all  numbers from 0 – 10

//hw2
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
let x = characters.map((c)=>{
    return {name: c.name}
  })
  
  console.log(x)
//2. Get array of all heights
let x = characters.map((c)=>{
    return {name: c.name}
  })
  
  console.log(x)

//3. Get array of objects with just name and height properties
let x = characters.map((c)=>{
    return {name: c.name, height: c.height}
  })
  
  console.log(x)
//4. Get array of all first names
  let x = characters.map((c)=> {
    return {name: c.name.split(' ')[0]}
  
  })
  console.log(x)

//***REDUCE***
//1. Get total mass of all characters
let x = characters.reduce((accum,c)=> {
    return accum + c.mass
  
  },0)
   console.log(x)
  
//2. Get total height of all characters
let x = characters.reduce((accum,c)=> {
    return accum + c.height
  
  },0)
   console.log(x)
  
//3. Get total number of characters by eye color
let x = characters.reduce((accum,c)=> {
    return accum + c.eye_color
  
  },1)
   console.log(x)
//4. Get total number of characters in all the character names
let x = characters.reduce((accum,c)=> {
    return accum + c.name.length
  
  },0)
   console.log(x)

//***FILTER***
//1. Get characters with mass greater than 100
let x = characters.filter((c)=>{
    return  c.mass >= 100
  })
  
  console.log(x)
  
//2. Get characters with height less than 200
let x = characters.filter((c)=>{
    return  c.height < 200
  })
  
  console.log(x)
//3. Get all male characters
let x = characters.filter((c)=>{
  
    return  c.gender == 'male'
  })
  
  console.log(x)
//4. Get all female characters
let x = characters.filter((c)=>{
  
    return  c.gender == 'female'
  })
  
  console.log(x)

//***SORT***
//1. Sort by mass
let x = characters.sort((a,b)=>{
    if(a.mass < b.mass){
      return 1}
    if(a.mass > b.mass){ 
      return -1}
      return 0
  })
  console.log(x)
//2. Sort by height
let x = characters.sort((a,b)=>{
    if(a.height < b.height){
      return 1}
    if(a.height > b.height){ 
      return -1}
      return 0
  })
  console.log(x)
//3. Sort by name
let x = characters.sort((a,b)=>{
    if(a.name > b.name){
      return 1}
    if(a.name < b.name){ 
      return -1}
      return 0
  })
  console.log(x)
//4. Sort by gender
let x = characters.sort((a,b)=>{
    if(a.gender > b.gender){
      return 1}
    if(a.gender < b.gender){ 
      return -1}
      return 0
  })
  console.log(x)
  
//***EVERY***
//1. Does every character have blue eyes?
let x = characters.every((c)=>{
    return c.eye_color == 'blue';
  });
  console.log(x)
//2. Does every character have mass more than 40?
let x = characters.every((c)=>{
    return c.mass > 40 ;
});
console.log(x);
//3. Is every character shorter than 200?
let x = characters.every((c)=>{
    return c.height > 200;
  });
  console.log(x)
//4. Is every character male?
let x = characters.every((c)=>{
    return c.gender == 'male';
  });
  console.log(x) 

//***SOME***
//1. Is there at least one male character?
let x = characters.some((c)=>{
    return c.gender == 'female';
  });
  console.log(x) 
//2. Is there at least one character with blue eyes?
let x = characters.some((c)=>{
    return c.eye_color == 'blue';
  });
  console.log(x)
//3. Is there at least one character taller than 210?
let x = characters.some((c)=>{
    return c.height >= 210;
  });
  console.log(x) 
//4. Is there at least one character that has mass less than 50?
let x = characters.some((c)=>{
    return c.mass >= 150;
  });
  console.log(x) 

  // CHALLENGE 2
// COIN CALCULATOR

// amount will always be a number 0 - 99
// return a string '#quarters,#dimes,#nickles,#pennies 
// should return the least amount of coins possible
// example 99 should return '3,2,0,4' because that is the
// the way that uses least amount of coins to add up to 99
// look at test to clarify requirements
const getChange = (amount) =>{
    // YOUR TODO
}
 
 // NOTE: BELOW CODE IS COMPLETED DON'T CHANGE UNLESS DOING BONUS
 // returns true if ALL tests pass, false if ONE OR MORE test fail
 testGetChange = () =>{
     // Assuming all test passed, but change it to false
     // if any fail 
     let passed = true
     if(getChange(0) !== '0,0,0,0'){
         console.log(`failed at: getChange(0) == '0,0,0,0'`)
         passed = false
     }
     if(getChange(1) !== '0,0,0,1'){
         console.log(`failed at: getChange(1) == '0,0,0,1' `)
         passed = false
     }
     if(getChange(5) !== '0,0,1,0'){
         console.log(`failed at: getChange(5) == '0,0,1,0' `)
         passed = false
     }
     if(getChange(10) !== '0,1,0,0'){
         console.log(`failed at: getChange(10) == '0,1,0,0' `)
         passed = false
     }
     if(getChange(25) !== '1,0,0,0'){
         console.log(`failed at: getChange(10) == '1,0,0,0' `)
         passed = false
     }
     if(getChange(26) !== '1,0,0,1'){
         console.log(`failed at: getChange(26) == '1,0,0,1'`)
         passed = false
     }
     if(getChange(99) !== '3,2,0,4'){
         console.log(`failed at: getChange(99) == '3,2,0,4'`)
         passed = false
     }
     return passed
 }
 
 if(testGetChange()){
     console.log('working good job')
 }
 
 // BONUS ADD your own test cases
 // BONUS Write another function that does the same but have it return an object {quartes:0, dimes:0, nickles:0 pennies:0}