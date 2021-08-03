/*
  Premises 1 : All men are mortal
  Premises 2 : Socrates is a man
  Conclusion : Therefore, socrates is mortal 
*/

let menAreMortal = true;
let socrateIsMan = true;

if(menAreMortal && socrateIsMan){
	console.log("Socrates is mortal");
}
else{
	console.log("Socrates is not mortal");
}


/*
  Premises 1 : This cake is either vanilla or chocolate
  Premises 2 : This cake is not chocolate
  Conclusion : Therefore, this cake is vanilla
*/

let cakeIsVanilla = true;
let cakeIsChocolate = false;

if (cakeIsVanilla || !cakeIsChocolate){
	console.log("This cake is vanilla");	
}
else {
	console.log("This cake is chocolate");	
}