function findSmallest (arr) {
    let smallest = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const arr = [5, 0, 7, 10, 8, 17, 1];

const ans = findSmallest(arr);
console.log(ans);