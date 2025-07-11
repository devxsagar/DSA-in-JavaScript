function singleNumberHashTable(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === 1) {
      return arr[i];
    }
  }
}

function singleNumberXOR(arr) {
    let xor = 0;

    for(let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }

    return xor;
}

const arr = [3, 1, 5, 4, 1, 5, 3];
const ans = singleNumberXOR(arr);
console.log(ans);
 