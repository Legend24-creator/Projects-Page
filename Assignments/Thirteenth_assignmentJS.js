// Write play codes to use the prompt, alert and if, else functions. 

// 1. The age grade.
let ask = prompt("How old are you?")
console.log (typeof Number (ask))

if (ask >= 18) {
    window.location.assign ("https://stackoverflow.com")
}

else {
    alert ("You are not allowed to proceed, please leave. 🙂 Find your agemates.")
}

// 2. The BMI trial and error.

let user_weight = prompt("What is your weight in kilogram (kg) ?")
console.log (typeof Number (user_weight))

let user_height = prompt ("What is your height in meters (m) ?")
console.log (typeof Number (user_height))

BMI = user_weight / (user_height ** 2)

if  (isNaN(user_height) || isNaN (user_weight) ) {
    alert ("Weight and height in numbers, please.")
}

if (BMI < 18.5 ) {
    alert ("You are underweight. Learn to eat more or visit a dietician. Don't even say you're anorexic. THAT IS WAY WORSE!")
}

// WORKED!!

else if (BMI < 25) {
    alert ("You are normal weight. Thank your lucky stars, and please try to maintain the normal weight. Exercising, drinking water and eating healthy would help.")
}

// WORKED!!!!!

 else if ( BMI < 30) {
    alert ("You are overweight. However, working out, drinking water and eating healthy would help. You can do this!")
}

// ARGHH, workedddd.
 
 else if (BMI < 35) {
alert ("You are obese. 😔 You can do this though.")
}

// Checked too!

else {
    alert ("You are...like clinically obese?")
}

// YES, YES, YES!

// 3. Help yourself evacuate an extremely hot or cold place if you have lost sensitivity in your skin.

let temperature = prompt ("What is the temperature where you are located? Tell us in Celsuis, that is the only way we can help you. We don't work with Farenheit, please. ")
console.log (typeof Number (temperature))

if (temperature < 15) {
    alert ("How are you even breathing? It is so cold there and in the next 24 hours your blood would freeze in your brain. Leave immediately, urgh.")
}

else if (temperature < 30) {
    alert ("Warm enough to exist in. You are welcomeeee.")
}
 
else {
    alert ("Wow. You know this ain't hell, right? That place is hot enough, please evacuate immediately to save yourself the risk of cooking your blood.")
}