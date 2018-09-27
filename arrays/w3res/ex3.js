console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

function first(input, i) {
  if(i === undefined)
  {
    i = 1
    return input.slice(0,i);
  }
  return input.slice(0,i-1);
}
