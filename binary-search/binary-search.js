'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1 && array[0] === target) return true

	const middleChar = array[Math.floor(array.length/2)]
	const firstHalf = array.slice(0, Math.floor(array.length/2))
	const secondHalf = array.slice(array.length/2 + 1)

	if( target === middleChar) return true;

	if(target > middleChar) return binarySearch(secondHalf, target)
	if(target < middleChar) return binarySearch(firstHalf, target)

	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
