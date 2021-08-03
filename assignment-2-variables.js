// let, const and var

/* 
  var :
    1. variables (var) are empty containers for storing data.
    2. var must be identified with unique name (unique names are called identifiers)
    3. var can be short names like x, y etc, or can be descriptive like age, totalSum and so on.
    4. var scope is global scoped, function / locally scoped.
      global scoped variable can be accessible to whole program,
      function / locally scoped variable can be accessible within function,
    5. var can be re-created and re-declared,   
      
*/
// use case :
console.log("________________ var use case ________________");

var name = "Jaden"; // Globally declared
console.log("Hello"+" "+name);

function dummyFunction(){
  var funName = "charlie";
  console.log("Hello"+" "+funName);
}
dummyFunction();

console.log("Hello"+" "+name);

console.log("________________ let use case ________________");

/*
  let :
    1. let is improved version of var,
    2. let is block scoped,
    3. let can be updated but not re-declared,
    
*/

let greet = "Hello";
console.log(greet+ " " + "World");

greet = "Great"; // let updated here
console.log(greet+ " " + "World");

console.log("________________ const use case ________________");

/*
  const :
    1. const is also a block scoped similarly to let,
    2. const can not be updated or re-declared
    3. used Capital words for identifiers, to declare in const its a convention not rule, 
*/


const FIRSTNAME = "Jamie";
const SURNAME = "O'con";
// SURNAME = "Mack"; it's an error

console.log(FIRSTNAME+" "+SURNAME);

/*
  Hoisting 
    - The process whereby the compiler allocates memory for variable and 
      function declarations prior to execution of the code
      
*/

var varTest;
console.log(varTest);
