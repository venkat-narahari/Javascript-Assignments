//Number
console.log("Number");
var one = '1';
console.log(one + 2); // 2 is converted to '2' and concatenated with '1'
console.log(Number(one) + 2); // convert '1' to a number first
console.log(+one + 2); // another way to convert to a number
console.log("");

//Constructors
console.log("Constructor");
var literal = 123;
var boxed = new Number(123);
literal.foo = "bar";
boxed.foo = "bar";
console.log(literal.foo);
console.log(boxed.foo);
console.log("");

//tofixed
console.log("tofixed");
var x = 123.456;
console.log(x.toFixed());
console.log(x.toFixed(2));
console.log(x.toFixed(6));
console.log("");

//toLocalString
console.log("tolacaleString");
var x = 123.456;
console.log(x.toString());
console.log(x.toLocaleString());
console.log("");

//toprecision
console.log("toprecission");
var x = 123.456;
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));
console.log(x.toPrecision(4));
console.log("");

//toString
console.log("tostring");
var x = 0x123ABC;
console.log(x.toString());
console.log(x.toString(16));
console.log("");

//epsilon
console.log("Epsilon");
console.log(Number.EPSILON);
console.log(1 + Number.EPSILON);
// 1 plus a number smaller than EPSILON will either round
// to 1 or (1 + EPSILON)
var x = 1 + (Number.EPSILON * 0.8);
console.log(x);
console.log(x - 1);
console.log("");

//maxsafeinteger
console.log("Maxsafeinteger");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log("");

//Max_value
console.log("Maxvalue");
console.log(Number.MAX_VALUE);
console.log("");

//minsafeinteger
console.log("minsafeinteger");
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1);
console.log(Number.MIN_SAFE_INTEGER - 2);
console.log("");

//minvalue
console.log("Minvalue");
console.log(Number.MIN_VALUE);
console.log("");

//negative infinity
console.log("negative infinity");
console.log(Number.NEGATIVE_INFINITY);
console.log(-Infinity);
console.log(-1/0);
console.log("");

//positive Infinity
console.log("Positive infinity");
console.log(Number.POSITIVE_INFINITY);
console.log(Infinity);
console.log(1/0);
console.log("");

//isfinite
console.log("isFinite");
console.log(Number.isFinite(0/0)); // 0/0 is NaN
console.log(Number.isFinite(1/0)); // 1/0 is infinity
console.log(Number.isFinite(1.2)); // 1.2 is finite
console.log();
// Compare Number.isFinite and global isFinite methods
console.log(Number.isFinite('0')); // The string '0' is not a Number
console.log(isFinite('0')); // The string '0' is converted to a Number
console.log("");

//isinteger
console.log("Isinteger");
console.log(Number.isInteger(0));
console.log(Number.isInteger(1.0));
console.log(Number.isInteger(1.2));
console.log("");

//isnaninteger
console.log("IsNan");
var x = 0/0;
console.log(x === NaN);
console.log(Number.isNaN(x));
console.log("");

//issafeinteger
console.log("Issafeinteger");
console.log(Number.isInteger(42));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log("");
