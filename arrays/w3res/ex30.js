function merge_array(a1, a2) {
    var result_array = [];
    var arr = a1.concat(a2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item])
        {
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var a1 = [1, 2, 3];

var a2 = [2, 30, 1];

console.log(merge_array(a1, a2));
