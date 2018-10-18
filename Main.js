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
{
//alert('Your registration number have accepted : you can try another');
//document.form1.text1.focus();
return true;
}
else
{
//alert('Please input alphanumeric characters only');
return false;
}
}


//rl.question for student name : Mizi
//function declared: Balqis
function userInputName (){
rl.question('Name : ', (name) => {
    
    if(alphanumeric(name)==true){
        person.Name = name;
        console.log(`Your name is ${person.Name}`);
        ;
    }else{
        console.log('Please enter alphabets only')
        userInputName();
         
    }
}); 

}

userInputName();

function userInputMatric (){
    rl.question('Matric No. : ', (matricNo) => {
        var checkMatric = matricNo.split("");
       return  person.MatricNo = matricNo;
    }); 
}
      
        function userInputMajor(){
        rl.question('Major (Information Technology/ Computer Science): ', (major) =>{
            if(major != "Information Technology" || major != "Computer Science" ){
                major = ("Major invalid Please re-enter:");
            } 
           return  person.Major = major;
        });
        }
    
   


   /* console.log(`Your name is ${userInputName.person.Name}`);
    console.log(`Your Matric number is ${userInputMatric.person.MatricNo}`);
    console.log(`Your Major is ${userInputMajor.person.Major}`); */
;


