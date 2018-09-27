console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));

function is_array(input){
  return toString.call(input) === '[object Array]'
}
