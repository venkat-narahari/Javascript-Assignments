//Sorting Array
console.log("Sort forward and reverse");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
console.log("");

//Numeric Sorting
var p = [40,50,100,25,1,10];
p.sort(function(a, b){return a - b});
console.log(p);
p.sort(function(a, b){return b - a});
console.log(p);
console.log("");

//Sorting object arrays
console.log("Sorting object arrays");
var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}];
console.log(cars);
console.log(cars.sort(function(a, b){return a.year - b.year}));
console.log("");
