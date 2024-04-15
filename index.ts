#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer Will Generate ARandom Number

// 2) User Will Input A Guessing Number

// 3) Compare User Input With Computer Generated Number And Show Result

const randomNumber = Math.floor (Math.random () * 6 +1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number Between 1-6: ",
    },
]);

if (answers.userGuessedNumber === randomNumber){
console.log ("You Guessed The Correct Number.");
}else {
    console.log ("You Guessed The Wrong Number.");
}

