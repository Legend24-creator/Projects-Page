// Image: Array Exercises
let people = ["Greg", "Mary", "Devon", "James"]
console.log (people)


// Removing James from the array. 
people.pop ()
console.log(people)

// Removing Greg from the array. 
people.pop ("Greg")
console.log(people)

// Adding Matt to the array
people.push ("Matt")
console.log (people)

// Adding my name to the front of the array 
people.unshift ("Dayo")
console.log (people)

// Removing Mary from the array 


// // Slicing: Copy of the array
// let people_copy = people.slice (0,1)
// console.log (people)

//Slicing: Copy of the array 
// let people_copy = people.slice(0,1)

// IndexOf Mary 
 console.log(people.indexOf("Mary"))

//  IndexOf FOO
console.log (people.indexOf("Foo"))

// Using the splice command
let persons = ["Greg", "Mary", "Devon", "James"]
persons.splice (1, 2, "Artie", "Elizabeth")
console.log (persons)

// Concantenating withBob
let withBob = people + " Bob"
console.log(withBob)




// Image: Exercises.
 
let favorite_foods = ["Rice", "Noodles", "Pasta"]
console.log (favorite_foods)
// Accessing the second element 

// Changing the last element 
favorite_foods.splice (2,1, "Bread")
console.log (favorite_foods) //Check out, didn't give an output

favorite_foods.pop ("Noodles")
let former_favorite_food = "Noodles"
console.log (former_favorite_food) //Hehehe. 

// Front of the array 
favorite_foods.unshift ("Water")
console.log (favorite_foods) //Pasta disappeared.

// What happens when you pop an empty array?
let empty = []
console.log(empty.pop ())
console.log (empty)
// It comes back out as empty... with []

// Splice examples
let numbers = ["2", "3", "4", "5"]
numbers.splice (1, "")
console.log (numbers)

let greek_words = ["alpha", "beta", "delta"]
    greek_words.splice (0, "gamma")
console.log (greek_words)


// Image: PART 1

let arr = []

// Adding your name to the array

arr.push("Dayo")
    console.log(arr) 

    //Adding last name to the end of the array.

    arr.push ("Oladimeji")
    console.log(arr)

    // Favorite color to the beginning of the array. 
    arr.unshift ("Black")
    console.log(arr)

    // Removing the first variable from the array, using splice. 
    arr.splice ()

    // Creating another array, array 2

    let arr2 = []
    arr2.push ("7")
    console.log (arr2)

    // Adding the string 'JavaScript' to the end of arr2
    arr2.push ("JavaScript")
    console.log(arr2)

    //Using IndexOf to find the position of 7
     console.log(arr2.indexOf("7"))
     //The IndexOf value returns the value of -1 if the number isn't in the array. 

    //  Creating a new value: combinedArr
let combined_arr = [arr + arr2]
combined_arr = arr.concat(arr2)
console.log (combined_arr)

// Corrections for Array: Excercises. 

let animals = people.concat(arr2)
console.log (animals)
//  Using splice, in the second assignment.
let num1 = [2, 3, 4, 5]
num1.splice (1, 1)
console.log(num1)

// 2
let num2 = ["alpha", "gamma", "delta "]
num2.splice (1, 0, "beta")
console.log (num2)

let num3 = [10, -10, -5, -3, 3, 2, 1]
num3.splice (1, 3, 9,8,7,6,5,4)
console.log (num3)





