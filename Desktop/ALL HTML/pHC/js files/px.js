function add(){
// const num1= document.getElementById("user").value;
  //const num2= document.getElementById("n2").value;
  const num1= document.USER.num1.value;
  const num2= document.USER.num2.value;
    alert(parseFloat(num1) + parseFloat(num2) );

 
}
function subtract(){
  const num1= document.getElementById("user").value;
  const num2= document.getElementById("n2").value;
  alert( parseFloat(num1) - parseFloat(num2) );


}
function Multiply(){
  const num1= document.getElementById("user").value;
    const num2= document.getElementById("n2").value;
  alert( parseFloat(num1) * parseFloat(num2) );


}
function Divide(){
  const num1= document.getElementById("user").value;
  const num2= document.getElementById("n2").value;
  alert( parseFloat(num1) / parseFloat(num2) );


}

function test(){

    const checker=parseInt(document.evenOdd.num3.value);
   if(checker % 2 ==0 && checker > 0){
     alert("The Number you Inputed is an EVEN number! ");
   }
   else if(checker % 2 !=0 && checker > 0){
    alert("The number you inputed is an ODD number ");
   }
   else{

    alert("ERROR! ERROR\n Pls don't input negative numbers!!");
   }

}

function Choice(){
const Value=document.test.programming.value;
const name=document.test.UserName.value;

switch(Value){
case "python":alert("Hello " + name + " you chose python.");
break;
case "C++":alert( "Hello " + name + " you chose C++.");
break;
case "javascript":alert( "Hello " + name + " you chose javascript.");
break;
case "Java":alert("Hello " + name + " you chose Java.");
break;
default: alert("Pls! Choose an option!😥🤷‍♂️🤦‍♂️" + name +"!");
break;
}

}

function coffee(){
 const hot=document.getElementById("tea").value;
 alert("Greetings " + hot);


}
