const arr = [1,2,3,4,5];

let targetValue = 3;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === targetValue) {
        console.log("Find the target value");
    }
}

/*
    - Here the Time Complexity is : o(n)
    - In the worst case the value can be in the last index so the loop will run n times.
*/


const arr2 = [1,2,3,4,5];

for(let i = 0; i< arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        // code....
    }
}

/*
    - Time complexity: o(n^2)
    - nested loop and both runs n times.
*/