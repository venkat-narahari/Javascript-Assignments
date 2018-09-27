var arr = [1,2,3,4,5,6,7,8];
var prod = 1;
var sum = 0;
for(var i of arr)
{
  prod *= i;
  sum += i;
}
console.log("Sum: " + sum + " Product: " +prod);
