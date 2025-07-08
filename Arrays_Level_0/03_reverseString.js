
// function reverseString(arr) {
//     let i = 0;
//     let j = arr.length - 1;

//     while(i < j) {
//         let copy = arr[i];
//         arr[i] = arr[j];
//         arr[j] = copy;
//         i++;
//         j--;
//     }

//     console.log(arr);
// }


function reverseString(arr) {
    let halfLength = Math.floor(arr.length/2);
    let j = arr.length - 1;

    for(let i = 0; i < halfLength; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    console.log(arr);
}



const arr = ["H", "E", "L", "L", "O"];
reverseString(arr);

// Time complexity: O(n) 
// Space complexity: O(1) 