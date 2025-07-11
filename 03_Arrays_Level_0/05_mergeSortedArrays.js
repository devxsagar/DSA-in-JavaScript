
// ✅ Brute force
function mergeSortedArrays(arr1, arr2, m, n) {
    let x = m;
    
    for(let i = 0; i < n; i++) {
        arr1[x] = arr2[i];
        x++
    }

    return arr1.sort();
}
const arr1 = [1,2,3,0,0,0], m=3;
const arr2 = [2,5,6], n=3;
const ans1 = mergeSortedArrays(arr1,arr2, m, n);
console.log("Ans1 is:", ans1);

// Time complexity: O(m+n log(m+n)), Space complexity: O(1)


// ✅ Optimized solution
function mergeSortedArraysOptimized(arr1, arr2, m, n) {
    // copy of arr1
    const arr1Copy = arr1.slice(0,m);
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i< m+n; i++) {
        if((arr1Copy[p1] < arr2[p2] && p1 < m) || p2 >= n){
            arr1[i] = arr1Copy[p1];
            p1++
        } else {
            arr1[i] = arr2[p2];
            p2++
        }
    }
    return arr1;
}
const arr3 = [1,2,3,0,0,0], a=3;
const arr4 = [2,5,6], b=3;
const ans2 = mergeSortedArraysOptimized(arr3, arr4, a , b)
console.log("Ans2 is:", ans2);

// Time complexity: O(m+n), Space complexity: O(m)


// ✅ Most optimized solution
function mergeSortedArraysMostOptimized(arr1, arr2, n, m) {
    let p1 = m - 1;
    let p2 = n - 1;

    for(let i = m+n-1; i >= 0; i--) {
        if(p2 < 0) {
            break;
        }

        if(p1 >= 0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1];
            p1--;
        } else {
            arr1[i] = arr2[p2];
            p2--;
        }
    }
    return arr1;
}

const arr5 = [1,2,3,0,0,0], x=3;
const arr6 = [2,5,6], y=3;
const ans3 = mergeSortedArraysMostOptimized(arr5, arr6, x, y)
console.log("Ans3 is:", ans3);

// Time complexity: O(m+n), Space complexity: O(1)



