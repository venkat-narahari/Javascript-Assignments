//length
console.log("length");
console.log(''.length);
console.log('abc'.length);
console.log("");

//charAt
console.log("CharAt");
console.log('abc'.charAt(2));
console.log('abc'[2]);
console.log("");

//charcodeat
console.log("charCodeAt");
console.log('abc'.charCodeAt(2));
console.log("");

//concat
console.log("Concat");
var x='a';
console.log(x.concat('bc','d'));
console.log(x);
console.log("");

//localecompare
console.log("localecompare");
console.log('hey'.localeCompare('hello'));
console.log('hey'.localeCompare('hey'));
console.log('hey'.localeCompare('hi'));
var x = ['foo', 'bar', 'baz'];
console.log(x.sort(function(a, b) {
  return a.localeCompare(b);
}));
console.log("");

//match
console.log("Match");
var regexp = /(\d\d\d)-(\d\d\d\d)/;
var result = 'call me: 555-4385'.match(regexp);
if (result) {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
  console.log('index: ' + result.index);
  console.log('input: ' + result.input);
}
console.log("");

//replace
console.log("Replace");
var x = 'abcba';
var replaced = 'abcba'.replace(/b/g, function(match, offset, string) {
  console.log('found match of "' + match + '"');
  console.log('  at offset ' + offset);
  console.log('  of string "' + string + '"');

  return match.toUpperCase();
});
console.log('replaced=' + replaced);
console.log('x=' + x); // x is unchanged
console.log("");

//substring
console.log("Substring");
var x = 'abcde';
console.log(x.substring(2));
console.log(x.substring(-2));
console.log(x.substring(2, 4));
console.log(x.substring(4, 2));
console.log(x.substring(2, -1));
console.log(x); // x is unchanged
console.log("");

//tolocalelowercase
console.log("tolocalelowercase()");
var x = 'aBCdEf';
console.log(x.toLocaleLowerCase());
console.log(x); // x is unchanged
console.log("");

//tolocaleuppercase
console.log("tolocaleUppercase()");
var x = 'aBCdEf';
console.log(x.toLocaleUpperCase());
console.log(x); // x is unchanged
console.log("");

//tolowercase
console.log("tolowercase()");
var x = 'aBCdEf';
console.log(x.toLowerCase());
console.log(x); // x is unchanged
console.log("");

//touppercase
console.log("toUppercase()");
var x = 'aBCdEf';
console.log(x.toUpperCase());
console.log(x); // x is unchanged
console.log("");

//trim
console.log("Trim");
var x = ' \t ab c ';
console.log("'" + x.trim() + "'");
console.log("'" + x + "'"); // x is unchanged
console.log("");

//fromcharcode
console.log("Fromcharcode");
console.log(String.fromCharCode(97, 98, 99));
console.log("");
