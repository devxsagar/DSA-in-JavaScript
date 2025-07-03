function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // only return -1 after the loop has checked all elements
}

const arr = [1, 2, 3, 4, 5, 6, 10];

let ans = searchElement(arr, 6);
console.log(ans);
