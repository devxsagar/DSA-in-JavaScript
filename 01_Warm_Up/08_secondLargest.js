function secondLargestElement(arr) {
    // Corner case if arr is empty or has only one element
    if(arr.length < 2) return -1;

    let firstLargest = -Infinity;
    let secondLargest =  -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [4, 9, 0, 2, 9, 8, 7, 1];

const ans = secondLargestElement(arr);
console.log(ans);

/* Corner cases :
    - If the array is empty,
    - If the array has -ve numbers,
    - If the array has only one element,
    - If the array has duplicate numbers
*/