function rangeBetwee(start, end)
{

		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		}
       else
       {
			var arro = new Array(end-start+1);

		for (var j = 0; j < arro.length; j++, start++)
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));
