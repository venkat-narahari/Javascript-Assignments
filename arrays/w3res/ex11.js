var arr = [1,2,3,4,5,6,7,8];
var result = 0;
for(var i of arr)
{
  result += Math.pow(i,2);
}
console.log(result);
