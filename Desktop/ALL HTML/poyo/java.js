//const prompt = require("prompt-sync")({sigint: true}) ;



let userName= prompt("say your name ");
let userAge=parseInt( prompt("Year of Birth "));

function year(Age){
return 2023 - Age;

}


function Greetings(name){

    return "greetings " +  name ;

}
let Book= Greetings(userName);
let cook = year(userAge) ;
let  nameAndAge = Book + " you are  " + cook + "years old"; 
 alert(nameAndAge);


 

 