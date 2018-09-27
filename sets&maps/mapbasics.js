//mapconstructor
console.log("Map constructor");
var objectKey = { foo: 'bar' };
var x = new Map();
x.set(1, 'keys are not converted to strings');
x.set('1', 'this is stored separately than the previous value');
x.set(objectKey, ['you use arbitrary objects as keys and values']);
console.log(x.get(1));
console.log(x.get('1'));
console.log(x.get(objectKey));
console.log("");

//map iterable
console.log("Map iterable");
var objectKey = { foo: 'bar' };
var fromArray = new Map([[0, 'array0'], [objectKey, 'array1']]);
console.log(fromArray.get(0));
console.log(fromArray.get(objectKey));
console.log();
var generator = function*() {
  yield [0, 'generator0'];
  yield [objectKey, 'generator1'];
};
var fromGenerator = new Map(generator());
console.log(fromGenerator.get(0));
console.log(fromGenerator.get(objectKey));
console.log("");

//size
console.log("Size");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
console.log(x.size);
x.set('d', 'value D');
console.log(x.size);
x.clear();
console.log(x.size);
console.log("");

//clear
console.log("Clear");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
console.log(x.size);
x.clear();
console.log(x.size);
console.log("");

//delete
console.log("Delete");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
console.log('size before delete: ' + x.size);
console.log('deleted "a" = ' + x.delete('a'));
console.log('size after delete: ' + x.size);
console.log('value for "a" = ' + x.get('a'));
console.log('deleted "foo" = ' + x.delete('foo'));
console.log('size after delete: ' + x.size);
console.log("");

//entries
console.log("Entries");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
// entries is returned by x[Symbol.iterator] so you can just
// use x directly in the for (... of ...) loop
for (var value of x) {
  console.dir(value);
}
// You can iterate over entries explicitly
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

//foreach
console.log("Foreach");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
x.forEach(function(value, key, map) {
  console.log('key: "' + key + '", value: "' + value + '"');
});
console.log("");

//get
console.log("Get");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

console.log(x.get('a'));
console.log(x.get('b'));

// Notice the values stored in the map are not properties on
// the object. get() is the only way to retrieve the values.
console.log(x['b']);
console.log("");

//has
console.log("Has");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

console.log(x.has('a'));
console.log(x.has('foo'));

// has() lets you check if a value is stored, even if
// the value is undefined
x.set('e', undefined);
console.log(x.has('e') + ' ' + x.get('e'));
console.log(x.has('f') + ' ' + x.get('f'));
console.log("");

//keys
console.log("keys");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

// Use for (... of ...) to loop over the iterator
for (var key of x.keys()) {
  console.dir(key);
}

// Or access the iterator manually
var keys = x.keys();

console.dir(keys.next());
console.dir(keys.next());
console.dir(keys.next());
console.dir(keys.next());
console.log("");

//set
console.log("Set");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);
console.log(x.get('a'));
x.set('a', 'a different value');
console.log(x.get('a'));
console.log("");


//values
console.log("Values");
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

// Use for (... of ...) to loop over the iterator
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
