function Arrays_sum(a1, a2)
{
  var result = [];
  var c = 0;
  var x=0;

  if (a1.length === 0)
   return "a1 is empty";
  if (a2.length === 0)
   return "a2 is empty";

 while (c < a1.length && c < a2.length)
  {
    result.push(a1[c] + a2[c]);
    c++;
  }

 if (c === a1.length)
 {
    for (x = c; x < a2.length; x++)   {
      result.push(a2[x]);
    }
  }
  else
  {
  for (x = c; x < a1.length; x++)
    {
      result.push(a1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));
