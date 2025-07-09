// LeetCode : 283

function moveZeroes(arr) {
  let x = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      if (arr[i] !== arr[x]) { // i == x then swap will not happen
        let temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
      }
      x++;
    }
  }
  return arr;
}

function moveZeroesAkshaySolution(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }

  // Fill all the remaining element to zero
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

const arr = [1, 0, 2, 0, 0, 0, 3, 4, 5, 0, 0];
const ans = moveZeroes(arr);
console.log(ans);

// Time complexity: O(n), Space complexity: O(1)