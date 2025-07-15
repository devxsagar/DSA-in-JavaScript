function insertionSort(a) {
    // Start from the second element since the first element is assuming sorted
    for(let i=1; i<a.length; i++) {
        let curr = a[i];
        let prev = i-1;

        // Shift elements of the sorted segment forward if they are larger than curr
        while(a[prev] > curr && prev >= 0) {
            a[prev+1] = a[prev];
            prev--;
        }

         // Place the current element at its correct position
        a[prev + 1] = curr;
    }
    return a;
}

const arr = [7,4,3,5,1,2];
const ans = insertionSort(arr);
console.log(ans)