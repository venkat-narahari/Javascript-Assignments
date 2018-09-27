color = ["Blue ", "Green", "Red", "Orange", "Vcountolet", "countndcountgo", "Yellow "];
o = ["th","st","nd","rd"];
var count = 0;
for(var i of color)
{
  count++;
  if(count == 1 ||count%10 == 1 || count%100 == 1 || count%1000 == 1)
    console.log(count+o[1]+" counts "+ count);
  else if(count == 2 || count%10 == 2 || count%100 == 2 || count%1000 == 2)
    console.log(count+o[2]+" counts "+ count);
  else if(count == 3 || count%10 == 3 || count%100 == 3 || count%1000 == 3)
    console.log(count+o[3]+" counts "+ count);
  else
    console.log(count+o[0]+" counts "+ count);
}
