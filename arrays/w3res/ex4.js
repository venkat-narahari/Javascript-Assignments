console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

function last(input,i) {
  if(i === undefined)
  {
    return input[input.length-1];
  }
  return input.slice(-i);
}
