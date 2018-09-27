var arr = [1,2,2,4,5,6];
var obj = {};
var out = [];
for(var i in arr)
{
  obj[arr[i]]=0;
}
for(var i in obj)
{
  out.push(i);
}
console.log(out);
