console.log(array_Clone([1,2,3,4]));
console.log(array_Clone([1,2,[3,4]]));

function array_Clone(input){
  return input.splice(0);
}
