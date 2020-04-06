/*
	*Conditionals, Functions, Scope, and Loops
 */

/*...
//Equals
let equals = 1 === 1;
console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than or equals too
let greaterThanEq = 5 >= 5;

//Less than or equals too
let lessThanEq = 4 <= 9;

//Not equals too
let notEquals = 5 !== 2;

 */

/*...
let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB){
	let storeAisLower = storeA < storeB;
	if(storeAisLower) {
		console.log("Store A has the lower price")
	} else if(storeB < storeA) {
		console.log("Store B has the lower price")
	} else {
		console.log("There prices are equal")
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(7,10);

function squareNum (number) {
	return number * number;
}
let squareNumber = squareNum (4);
console.log(squareNumber);

 */

/*...
let x = 10;

function addNumbers(n, m) {
	console.log(x)
	return n + m;
}

addNumbers(2, 3)
/



 */

/*...

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(i = 0; i<arrLen; i++){
//	console.log("i is equal to: " + i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++){
		console.log('j is equal to: ' + j);
	}
}

 */

let x = 0;
while(x < 10){
	console.log('Ran');
	x = x + 1;
}

