//Array Creation
console.log("Array Creation");
var cars = ['BMW', 'AUDI', 'MERCEDES'];
console.log("");

//Array length
console.log("Array length");
console.log(cars.length);
console.log("");

//Accessing array element
console.log("Accessing array element");
var carcompany1 = cars[0];
var carcompany2 = cars[1];
var carcompany3 = cars[cars.length - 1];
console.log(carcompany1 + " " + carcompany2 + " " + carcompany3);
console.log("");

//Traversing Array with foreach
console.log("Traversing array with foreach");
cars.forEach(function(item, index, array) {
  console.log(item, index);
});
console.log("");

//Adding and removing elements in array
console.log("Using Push to add to array");
var push1 = cars.push('Ferari');
console.log(cars);
console.log("Using Pop to remove from an array");
var pop1 = cars.pop('Ferari');
console.log(cars);
console.log("");

//Remove from front of an Array
console.log("Shift Array front");
var shift1 = cars.shift();
console.log(cars);
console.log(shift1);
console.log("");

//Add to front of an Array
console.log("UnShift Array front");
var unshift1 = cars.unshift('BMW');
console.log(cars);
console.log("");

//Index of and item in array
console.log("Index of item in array");
var pos = cars.indexOf('AUDI');
console.log(pos);
console.log("");

//Remove and item by index position
console.log("Remove  items by index postions");
var remitem = cars.splice(pos, 2);
console.log(cars);
console.log("");

//Copy an Array the fastest way
console.log("Copy an array");
var copy = cars.slice();
console.log(copy);
console.log("");

//Array range
console.log("Array range");
//var namelistA = new Array(4294967296);
var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1;
//var namelistC = new Array(-100);
//console.log(namelistA.length);
console.log(namelistB.length);
//console.log(namelistC.length);
console.log("");

//Typeof array
console.log("Array type");
console.log(typeof cars);
console.log("");

//Is Array or not using isArray
console.log("IsArray");
console.log(Array.isArray(cars));
console.log("");

//Is Array or not with own function
console.log("Isarray own function with object prototype");

function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(cars));
console.log("");

//Is array or not using instance of
console.log("Isarray using instance of");
console.log(cars instanceof Array);
console.log("");

//Sort an Array
console.log("Sort an Array");
var cars = new Array('BMW', 'AUDI', 'MERCEDES');
console.log(cars);
cars.sort();
console.log(cars);
