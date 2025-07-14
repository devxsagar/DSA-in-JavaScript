function bubbleSort(arr) {
  let n = arr.length;

  // To track swapping
  let isSwapped = false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        isSwapped = true;
      }
    }
    if(!isSwapped) break; // if isSwapped still false after the iteration that means no swapping happened, so we don't need to continue the process
  }

  return arr;
}

const arr = [5, 4, 9, 12, 3, 1];
const ans = bubbleSort(arr);
console.log(ans);
