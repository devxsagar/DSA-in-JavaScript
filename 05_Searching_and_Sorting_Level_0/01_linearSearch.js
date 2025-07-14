
function linearSearch(arr, target) {

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [4,9,1,0,2];
let target = 1;
const ans = linearSearch(arr, target)
console.log(ans);