function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i]<= arr2[j]) {
            sortedArr.push(arr1[i]);
            i += 1 
        }
        else {
            sortedArr.push(arr2[j]);
            j += 1;
        }
    }

    while(i < arr1.length) {
        sortedArr.push(arr1[i]);
            i += 1 
    }

    while(j < arr2.length) {
        sortedArr.push(arr2[j]);
            j += 1 
    }

    return sortedArr;
}

function mergeSort(arr) {

    if(arr.length <= 1) return arr;
    let midIdx = Math.floor(arr.length /2)

    let firstHalf = mergeSort(arr.slice(0, midIdx));
    let secondHalf = mergeSort(arr.slice(midIdx));

    return merge(firstHalf, secondHalf);
}

module.exports = { merge, mergeSort};