// Image One: Exercises

let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isRewarding: true,
    isChallenging: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programming-joke"

};

// 1. Adding Go to the end of the programming languages
// programming.push("Go")
// console.log(programming)

programming.languages.push("GO")
console.log (programming)


// 2. Changing the difficulty value.
programming.difficulty = 7
console.log (programming)

// 3. Deleting the jokes key.
delete (programming.jokes)
console.log (programming)

// 4. Adding a new value: isFun.
programming.isFun = true
console.log (programming)



// 5. Iterating through a loop.

let languages =  ["Javascript", "Python", "Ruby"]
// console.log(languages.length )

for (let count = 0; count < languages.length; count = count + 1) {
    console.log(languages[count])
}

for (let index=0; index < programming.languages.length; index = index + 1) {
    console.log (programming.languages[index])
}

// 6. Console.log the keys in the programming object.
for ( let key in programming) {
    console.log(key)
}

// 6. Console.log the values in the programming object.
 for (let key in programming) {
    console.log(programming[key])
 }


// Image Two: Exercises
// 1.
about = {
    firstName: "Dayo",
    lastName: "Oladimeji",
    occupation: "Student"
}

//2.  Accessing each value. 

//a. Accessing first name.
console.log(about.firstName)
// b. Accessing last name.
console.log(about.lastName)
// b. Accessing occupation name.
console.log(about.occupation)

// 3. Adding the key, hobby, and removing the key and value for occupation.

about.hobby = "reading"
console.log (about)

// Removing the occupation value.
delete (about.occupation)
console.log(about)

// 4. Difference between the dot and bracket notation. 
// Now dot notation is used when the property name is known and it is a normal word, has no spaces, or special symbols or numbers. Dot notation cannot handle spacing, eg, consol.log(about.favorite food). This would bring an error.

// Bracket notation is used when a property name is stored in a variable, and can have spaces, or isn't a valid word. It also works with variables too. 