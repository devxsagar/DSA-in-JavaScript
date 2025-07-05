function isPalindrome(n) {
  if (n < 0) return false;

  let rev = 0;
  let nCopy = n;

  while (n > 0) {
    let remainder = n % 10;
    rev = rev * 10 + remainder;
    n = Math.floor(n / 10);
  }

  //   return nCopy === rev ? true : false;
  return rev === nCopy; // This also return true / false
}

let num = 121;

const ans = isPalindrome(num);
console.log(ans);
