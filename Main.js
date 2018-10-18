//import student class : Mizi
let person = require ('./Students.js');

//create readline module : mizi
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.prompt();

/* Tirmizi */
function alphanumeric(inputtxt)
{ 
var letters = /^[a-zA-Z]+$/;
if(inputtxt.match(letters))
{  return true;
}  else
{  return false;
}}

//balqis
function numeric(inputtxt)
{ 
var letters = /^[0-9]+$/;
if(inputtxt.match(letters))
{  return true;
}  else
{  return false;
}}


//rl.question for student name : Mizi
//function declared: Balqis
function userInputName (){
rl.question('Name : ', (name) => {
    
    if(alphanumeric(name)==true){
        person.Name = name;
        userInputMatric();
        ;
        }else{
        console.log('Please enter alphabets only')
        userInputName();
        }
    }); 

}

//userInputName();

function userInputMatric(){
    rl.question('Matric No. : ', (matricNo) => {

        if(numeric(matricNo)==true){
            person.MatricNo = matricNo;
            userInputMajor();
            ;
        }else{
            userInputMatric();
            console.log('Please enter numbers only');
             
        }    
    }); 
}
//userInputMatric();
      
        function userInputMajor(){
        rl.question('Major (Information Technology/ Computer Science): ', (major) =>{

            if(major == "BIT" || major == "Computer Science" ){
                person.Major = major;
                console.log(person.Display);

                } else {
                console.log(`Major not recognized. Please re-enter`);
                userInputMajor();
                }
        

        });
    }

    export function userInputName(){
    };
    display();

    
   


   /* console.log(`Your name is ${userInputName.person.Name}`);
    console.log(`Your Matric number is ${userInputMatric.person.MatricNo}`);
    console.log(`Your Major is ${userInputMajor.person.Major}`); */
;


