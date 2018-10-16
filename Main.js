//import student class : Mizi
let {person} = require ('./Students.js');

//create readline module : mizi
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//rl.quesetion for student name : Mizi
rl.question('Name : ', (name) => {
    person.Name = name;
    console.log(`Your name is ${person.Name}`);
});



