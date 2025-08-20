/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        // Midpoint calculation (avoids overflow by using l + (r-l)/2)
        let mid = l + Math.floor((r - l) / 2);

        /**
         * Check whether the window [mid, mid + k) is closer to x
         * Compare distance between arr[mid] and x, vs arr[mid+k] and x.
         * 
         * If arr[mid + k] is closer, shift window to the right → l = mid+1
         * Else, shrink window from the right → r = mid
         */

        if((arr[mid + k] - x) < (x - arr[mid])) {
            l = mid + 1;
        } else {
            r = mid
        }
    }

    // return arr.slice(l, l+k);

    // Collect k closest elements starting from left boundary 'l' 
    const ans = [];
    for(let i=l; i<l+k; i++) {
        ans.push(arr[i])
    }

    return ans;
};

const  arr = [1,2,3,4,5], k = 4, x = 3;
console.log(findClosestElements(arr, k, x));