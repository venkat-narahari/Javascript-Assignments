var i;
function foo(i)
{
  console.log(i);
}

async function f() {
  var i;
  setTimeout(()=>{
  for(i=0;i<10;i++)
  {foo(i);}},1000);
}

f();
foo(2);
