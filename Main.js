//import student class : Mizi
let person = require ('./Students.js');

//create readline module : mizi
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//rl.quesetion for student name : Mizi
rl.question('Name : ', (name) => {
    //Start here edited by Balqis (Except related with person.Name/)
    var checkName = name.split("");
    var i;
       for (i =0; i < checkName.length; i++){
            if(isNaN(checkName[i])){ //check if character (string) have numbers
                continue; }
                    else {(console.log("Can't recognized number. Please re-enter."));
                }}
                    
                  /*  for (i=0; i < checkName.length; i++){
                        while(!isNaN(checkName[i]) == true){
                      //  if(isNaN(checkName[i])){ //check if character (string) have numbers
                                rl.prompt(console.log("Can't recognized number. Please re-enter."));
                        }
                            
                        };*/
                

    rl.question('Matric No. : ', (matricNo) => {
        rl.question('Major : ', (major) =>{

    person.Name = name;
    person.MatricNo = matricNo;
    person.Major = major;

    console.log(`Your name is ${person.Name}`);
    console.log(`Your Matric number is ${person.MatricNo}`);
    console.log(`Your Major is ${person.Major}`);

        });
    });
});




