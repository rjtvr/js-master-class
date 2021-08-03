/*
  Premises 1 : All men are mortal
  Premises 2 : Socrates is a man
  Conclusion : Therefore, socrates is mortal 
*/


function mortalOrNot(name){
  let flag = false;     
  if(name === "socrate"){
    flag = true;
  }
  
  return flag;
}

// test case
console.log(mortalOrNot("socrate"));
console.log(mortalOrNot("hello"));
console.log(mortalOrNot("55"));
console.log(mortalOrNot(45689));


/*
  Premises 1 : This cake is either vanilla or chocolate
  Premises 2 : This cake is not chocolate 
  Conclusion : Therefore, this cake is vanilla
*/


let cakeIsVanilla = true;
let cakeIsChocolate = false; 
const CAKE = ["vanilla", "chocolate"];
let cakeIs;

function cakeFlavour(){
  if(cakeIsVanilla || !cakeIsChoclate){
     cakeIs = CAKE[0];
  }
  else{
    cakeIs = CAKE[1];  
  }
  return cakeIs;
}

console.log(cakeFlavour());