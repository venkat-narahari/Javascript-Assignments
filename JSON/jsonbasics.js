//parse1
console.log("Parse1");
var x = JSON.parse('{"foo": 1, "bar": 2}');
console.log(x.foo);
console.log(x.bar);
console.log("");

//parse2
console.log("Parse2");
var reviver = function(key, value) {
  console.log('reviver called with key="' + key + '", value=' + value);
  if (key === 'foo') {
    return value * 10;
  }
  return value;
};
var x = JSON.parse('{"foo": 1, "bar": 2}', reviver);
console.log(x.foo);
console.log(x.bar);
console.log("");

//stringify1
console.log("Stringify1");
var x = { foo: 1, bar: 2 };
console.log(JSON.stringify(x));

x.toJSON = function() {
  return { baz: 3 };
};
console.log(JSON.stringify(x));
console.log("");

//stringify2
console.log("Stringify2");
x = { foo: 1, bar: 2 };

var replacer = function(key, value) {
 console.log('replacer called with key="' + key + '", value=' + value);
 if (key === 'foo') return value * 10;
 return value;
}
console.log(JSON.stringify(x, replacer, ' '));
console.log("");
