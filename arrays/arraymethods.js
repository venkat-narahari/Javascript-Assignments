//Array from string , array
console.log("array.from()");
console.log(Array.from('foo'));
console.log(Array.from([1,2,3]));
console.log("");

// Array from set, map
var s = new Set(['foo',1]);
Array.from(s);
console.log(s);
var m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(m));
console.log(m);
var mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));
console.log("");

//Array from array like object
function f(){
  return Array.from(arguments);
}
console.log(f(1,2,3));
console.log("");

//Array.of()
console.log("Arrayof()");
console.log(Array.of(7));
console.log(Array(7));
console.log(Array.of(1,2,3));
console.log(Array.of(1,'Hey'));
console.log("");
