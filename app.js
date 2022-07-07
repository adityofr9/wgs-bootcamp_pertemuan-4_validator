//Readline
const readline = require('readline');
//NPM Validator
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('What is your address? ', (address) => {
        rl.question('What is your phone number? ', (number) => {
            console.log(`Hello ${name}`);
            console.log(`Your Address ${address}`);
            console.log(`Your Phone number is ${number}`);
            rl.close();
        });
    });
});