var num = 025468;
var str = num.toString();
var result = [str[0]];

for(var i=1; i<str.length; i++)
  {
    if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
     {
      result.push('-', str[i]);
     }
    else
     {
      result.push(str[i]);
     }
  }
console.log(result.join(''));
