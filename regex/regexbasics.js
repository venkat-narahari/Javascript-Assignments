//Regex constructors
console.log("Regex constructors");
var x = /pattern/i;
var y = RegExp('pattern', 'i');
var z = new RegExp('pattern', 'i');
console.log(x + " " + y + " " + z);
console.log("");

//global RegExp
console.log("Global Regex");
console.log('abcba'.replace(/b/, 'X'));
console.log('abcba'.replace(/b/g, 'X'));
console.log("");

//ignoreCase
console.log("ignorecase");
console.log(/hello/.test('Hello'));
console.log(/hello/i.test('Hello'));
console.log("");

//lastindex
console.log("LastIndex");
var regexp = /foo|bar|baz/g;
console.log(regexp.exec('foo bar baz')[0]);
console.log(regexp.lastIndex);
regexp.lastIndex = 5;
console.log(regexp.exec('foo bar baz')[0]);
console.log("");

//multiline
console.log("Multiline");
var str = 'hello\nworld';
console.log(/^world/.test(str));
console.log(/^world/m.test(str));

str = '"a quote\nover multiple lines"';
console.log(/".*"/.test(str));
console.log(/"[^]*"/.test(str));
console.log("");

//source
console.log("Source");
var regexp = /(\d\d\d)-(\d\d\d\d)/;
console.log(regexp);
console.log(regexp.source);
console.log("");

//exec
console.log("Exec");
var regexp = /(\d\d\d)-(\d\d\d\d)/;
var result = regexp.exec('call me: 555-4385');
if (result) {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
}
console.log("");

//test
console.log("Test");
var regexp = /(\d\d\d)-(\d\d\d\d)/;
console.log(regexp.test('555-4385'));
console.log(regexp.test('KL5-4385'));
console.log("");
