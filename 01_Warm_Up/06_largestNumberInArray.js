function findLargest(arr) {
    let num = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > num) {
            num = arr[i]
        }
    }
    return num;
}

const arr = [5, 0, 7, 10, 8, 17, 1];

const ans = findLargest(arr)
console.log(ans);
