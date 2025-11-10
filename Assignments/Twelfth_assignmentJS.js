// NO 1.
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let count = 0; count < numbers.length; count = count + 1) {
//     console.log(numbers[count])
// }
let numbers =  15


if (numbers % 3 == 0)
 {
    console.log ('Fizzzz!')
}

if (numbers % 5 == 0)
{
    console.log ("Buzzzzz...")
}
if (numbers % 5 == 0 && numbers % 3 == 0) {
    console.log ("Fizz buzz")
}

// NO 2. (Now corrected.)

for (num = 1 ; num <= 20 ; num++)
if (num % 2 ==0) {
    console.log ("This is an even number.")
}
else {
    console.log (num)
}

// Correction. 



for (let nums = 1; nums <= 20; nums ++){

    if (nums % 3 == 0 && nums % 5 == 0) {
    console.log ("Fizz buzzzuhhh...")
}


else if (nums % 3  == 0 ){
    console.log ("Fizzuh...")
}

else if (nums % 5 == 0) {
    console.log ("Buzzuhhhh...")
}


else {
    console.log (nums)
}
}


