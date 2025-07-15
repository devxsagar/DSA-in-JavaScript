function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    // Find the minimum value in the array
    for (let j = i + 1; j < n; j++) {
      // updating the min value index
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Swapping the min value with current index value
    // if min index and current index(i) are same then we don't need to swap the value
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

const arr = [6, 5, 10, 3, 1];
const ans = selectionSort(arr);
console.log(ans);
