//Concat
console.log("Concat");
var x = [1, 2, 3];
var concatenated = x.concat(4, 5, [6, 7]);
console.log(concatenated);
console.log(concatenated.length);
console.log(x);
console.log("");

//copywithin
console.log("Copywithin");
var x = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(x.copyWithin(0, 3));
x = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(x.copyWithin(3, 0));
x = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(x.copyWithin(2, 0, 3));
console.log("");

//entries
console.log("Entries");
var x = ['a', 'b'];
for (var entry of x.entries()) {
  console.dir(entry);
}
// Or access the iterator manually
var entries = x.entries();
console.dir(entries.next());
console.dir(entries.next());
console.dir(entries.next());
console.log("");

//every
console.log("Every");
var isEven = function(x) { return (x % 2) === 0; }
console.log([2, 22, 36].every(isEven));
console.log([6, 19, 18].every(isEven));
console.log([5, 19, 17].every(isEven));
console.log("");

//fill
console.log("Fill");
var x = Array(5);
console.log(x.fill('a'));
console.log(x.fill('b', 3));
console.log(x.fill('c', 0, 2));
console.log("");

//filter
console.log("Filter");
var isEven = function(x) { return (x % 2) === 0; }
var numbers = [1, 2, 4, 5, 7, 9, 12];
console.log(numbers.filter(isEven));
console.log("");

//find
console.log("find");
var x = ['a', 'b', 'foo', 'd', 'e'];
console.log(x.find(function(item) {
  return item.length > 1;
}));
console.log("");

//findindex
console.log("Findindex");
var x = ['a', 'b', 'foo', 'd', 'e'];
console.log(x.findIndex(function(item) {
  return item.length > 1;
}));
console.log("");

//includes
console.log("Includes");
var x = ['a', 'b', 'c', 'd'];
console.log(x.includes('b'));
console.log(x.includes('b',1));
console.log(x.includes('a', -2));
console.log(x.includes('e'));
console.log("");

//join
console.log("Join");
var x = ['a', 'b', 'c'];
console.log(x.join());
console.log(x.join(' -- '));
console.log("");

//keys
console.log("Keys");
var x = ['a', 'b'];
// Use for (... of ...) to loop over the iterator
for (var key of x.keys()) {
  console.dir(key);
}
// Or access the iterator manually
var keys = x.keys();
console.dir(keys.next());
console.dir(keys.next());
console.dir(keys.next());
console.log("");

//lastindexof
console.log("Lastindexof");
var x = ['a', 'b', 'c', 'd', 'b', 'c', 'a'];
console.log(x.lastIndexOf('b'));
console.log(x.lastIndexOf('b', 3));
console.log(x.lastIndexOf('b', -4));
console.log(x.lastIndexOf('e', 2));
console.log("");

//reduce
console.log("Reduce");
var join = function(prev, cur) { return prev + cur; }
console.log(['b', 'c'].reduce(join, 'a'));
console.log("");

//reduceright
console.log("Reduceright");
var join = function(prev, cur) { return prev + cur; }
console.log(['b', 'c'].reduceRight(join, 'a'));
console.log("");

//some
console.log("Some");
var isEven = function(x) { return (x % 2) === 0; }
console.log([2, 22, 36].some(isEven));
console.log([6, 19, 18].some(isEven));
console.log([5, 19, 17].some(isEven));
console.log("");
