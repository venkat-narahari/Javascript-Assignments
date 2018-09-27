function union(a1, a2) {

  if ((a1 == null) || (a2==null))
    return void 0;

  var obj = {};

  for (var i = a1.length-1; i >= 0; -- i)
     obj[a1[i]] = a1[i];

  for (var i = a2.length-1; i >= 0; -- i)
     obj[a2[i]] = a2[i];

  var res = [];

  for (var n in obj)
  {

    if (obj.hasOwnProperty(n))
      res.push(obj[n]);
  }

  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
