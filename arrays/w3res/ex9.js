var input = "The QUick foX";
var output = [];
for(var i = 0; i < input.length ; i++)
{
  if(input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90)
  {
    output[i] = input[i].toLowerCase();
  }

  else if(input.charCodeAt(i)>=97 && input.charCodeAt(i)<=122)
  {
    output[i] = input[i].toUpperCase();
  }

  else
  {
      output[i] = input[i];
  }
}
console.log(output.join("").toString());
