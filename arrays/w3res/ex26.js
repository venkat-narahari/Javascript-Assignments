function twoSum(n, target_num) {
  var map = [];
  var inum = [];
  for (var i = 0; i < n.length; i++)
  {
    if (map[n[i]] != null)
    {
      var index = map[n[i]];
      inum[0] = index+1;
      inum[1] = i+1;
      break;
    }
    else
    {
      map[target_num - n[i]] = i;
    }
  }
  return inum;
}
console.log(twoSum([10,20,10,40,50,60,70],50));
