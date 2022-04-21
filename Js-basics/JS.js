/*
used to web pages alive and program here are knoown as scripts
Widely used by big companies like netflix, pypal to built their internal
 We can use it build full-blown web o mobile apps& real time networking applications like
 chats & video
Javascript is run on javascript engines , js engines in firefox & chrome re SpiderMonkey 
and v8 
Node (Goggle's v8 JS engine) using which we can run code outside the browser also
ECMA Script- Specification
JavaScript- Programming Language
As practtcise it is best to put the javascript script at the end of the body tags bcause:-
1. Browser gets engaged in parsing the JS code if the code is at the strrt & 
ultimately delivers the code late(bad user experienecE).
2.

it has Same origin policy(one website cant access other other one)
*/
console.log('Hello World');
/*
Variable-used to store data temporarily 
- cannot be a reserved keyword
-meaningful & descriptive name
-no special characters & numbers 
-CamelCase notation & case sensitive
-
*/
let na='mosh'; 
console.log(na);

//const keyword is used for the values whose valueswe doon't want to change 
//otherwise use let keywoord  
const interestRate=0.3;
interestRate=1; // will give error
console.log(interestRate);

// Primitive/ Value Types
/*String
Number (all the floating/ real numbers are reffered to as numbers)
Boolean
undefined
null( where we want to clear the value of a variable)

jS is dynamic language i.e. can be changed at run time
*/

//typeof( used to find datatype of the opearator)
typeof na // o/p->"string"
typeof isApproved // o/p -> boolean
/*
Undefined is type as well as a value
*/


//Refference types
/*
Ojects
when you are creating similar type of variables
makes code cleaner
 works in key,value pairs
*/

let n='Mos';
let age = 30;

let person={
    n:'Mosh',
    age: 30
}
console.log(person); 

//updatevalues in objects using dot notation
 person.age= 17;

 //printing specific value of object
console.log(person.n);

//update values using Bracket Notation
person['n'] ='Mary';

//Array ( treated as an bject in JS)
let slectedColor= ['red','blue'];
slectedColor[2]=1;
console.log(slectedColor);

//Functions- building blocks in js
//set of statemenst that either perform a task or calculate a value
function greet(){
    //body of func(define logic)
    console.log('Hello World');
}

function greet(name){
    console.log('Hello'+name);
}
//function calling
greet();
greet('John'); //function with argument

//Type of function
/*
  function square(number){
      return number*number;
  }

  console.log(square(2))

  console.log() is also a function  call 
  which awokes the log function
*/

//Alert function
alert('Hello');
alert('World');
alert(3 +
    1
    + 2);
//'use strict' is located at the top of a script so that the code  works in modern way

//prompt accepts two argumenst where it asks user to input the value 
let age1 = prompt('How old are you?',100);

//string='0' will be teated as true in js 
//undefined values can't be compared and undefined values are converted into NaN & returns false
if (year == 2015) {
    alert( 'You guessed it right!' );
  } else {
    alert( 'How can you be so wrong?' ); // any value except 2015
  }
  //Nested ? conditional statements
  let accessAllowed = (age > 18) ? true : false;
  let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

  let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

// the below code is used to print the variable which has value
//it will chck for value using or...ASA it sees a value true cond then stops
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder