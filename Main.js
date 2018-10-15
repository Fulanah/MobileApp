//import student class and create prompt for name and matric number
let {person} = require ('./Students.js');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    person.Name = line;

    console.log(`Say what? I might have heard '${person.Name}'`);
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
    });



