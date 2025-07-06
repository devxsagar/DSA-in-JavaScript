
function maxElement(arr) {
    let max = arr[0];  // creating one variable "max"
    for(let i = 0; i< arr.length; i++) {   // creating another variable "i"
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

const arr = [1,2,3,4];

/*
    - Here we are creating two variables but both are countable that's why space complexity is: o(1);
*/