function binary_Search(items, value){
    var fIndex  = 0,
        lIndex   = items.length - 1,
        mIndex = Math.floor((lIndex + fIndex)/2);

    while(items[mIndex] != value && fIndex < lIndex)
    {
       if (value < items[mIndex])
        {
            lIndex = mIndex - 1;
        }
      else if (value > items[mIndex])
        {
            fIndex = mIndex + 1;
        }
        mIndex = Math.floor((lIndex + fIndex)/2);
    }

 return (items[mIndex] != value) ? -1 : mIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));
