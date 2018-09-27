//Set Constructor
console.log("Constructor Set");
var x = new Set();
x.add(1);
x.add('a');
x.add({ foo: 'bar' });

for (var item of x) {
  console.dir(item);
}
console.log("");

//Iterable
console.log("Iterable Set");
var fromArray = new Set([1, '1', { foo: 'bar' }]);
for (var item of fromArray) {
  console.dir(item);
}
var generator = function*() {
  yield 3;
  yield 'javascript';
};
var fromGenerator = new Set(generator());
for (var item of fromGenerator) {
  console.dir(item);
}
console.log("");

//Size, add, clear
console.log("Size");
var x = new Set(['a', 'b', 'c']);
console.log(x.size);
x.add('d');
console.log(x.size);
x.clear();
console.log(x.size);
console.log("");

//delete
console.log("Delete");
var x = new Set(['a', 'b', 'c']);
console.log('size before delete: ' + x.size);
console.log('deleted "a" = ' + x.delete('a'));
console.log('size after delete: ' + x.size);
console.log('deleted "foo" = ' + x.delete('foo'));
console.log("");

//entries
console.log("Entries");
var x = new Set(['a', 'b', 'c']);
// Use for (... of ...) to loop over the iterator
for (var entry of x.entries()) {
  console.dir(entry);
}
// Or access the iterator manually
var entries = x.entries();
console.dir(entries.next());
console.dir(entries.next());
console.dir(entries.next());
console.dir(entries.next());
console.log("");

//has
console.log("Has");
var x = new Set(['a','b','c']);
console.log(x.has('a'));
console.log(x.has('foo'));
console.log("");

//keys & values
var x = new Set(['a', 'b', 'c']);
// values is returned by x[Symbol.iterator] so you can just
// use x directly in the for (... of ...) loop
for (var value of x) {
  console.dir(value);
}
// You can iterate over values explicitly
for (var value of x.values()) {
  console.dir(value);
}
// Or access the iterator manually
var values = x.values();
console.dir(values.next());
console.dir(values.next());
console.dir(values.next());
console.dir(values.next());
console.log("");
