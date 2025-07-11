
// LeetCode problem: 26

function removeDuplicatesFromSortedArray(arr) {
    let x = 0; // pointer to track last unique element's position

    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] > arr[x]) {   // checking unique
            x++;                // incrementing the x
            arr[x] = arr[i];    // updating the value
        }
    }

    return x + 1;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const ans = removeDuplicatesFromSortedArray(arr);
console.log(ans);
