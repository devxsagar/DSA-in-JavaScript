// Helper function
function merge(a1, a2) {
  let p1 = 0;
  let p2 = 0;

  const mergeArr = new Array(a1.length + a2.length);

  for (let i = 0; i < mergeArr.length; i++) {
    if ((a1[p1] < a2[p2] && p1 < a1.length) || p2 >= a2.length) {
      mergeArr[i] = a1[p1];
      p1++;
    } else {
      mergeArr[i] = a2[p2];
      p2++;
    }
  }

  return mergeArr;
}

// Merge sort function
function mergeSort(a) {
  // Base case
  if(a.length <= 1) return a;

  let mid = Math.floor(a.length / 2);

  let left = mergeSort(a.slice(0,mid));
  let right = mergeSort(a.slice(mid));

  return merge(left,right);
}

const a = [5,2,3,1]
const ans = mergeSort(a);
console.log(ans);
