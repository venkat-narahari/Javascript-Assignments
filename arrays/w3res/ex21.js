var flatten = function(a, shallow,m){
  if(!m){ m = []}

if (shallow) {
  return m.concat.apply(m,a);
  }

   for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,m);
        }else{
            m.push(a[i]);
        }
    }
    return m;
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
