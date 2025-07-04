//        *
//      * *
//    * * *
//  * * * *

let n = 4;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - (i + 1); j++) { // it will print the space
    row = row + "  ";
  }
  for (let k = 0; k < i + 1; k++) {  // it will print the "*"
    row = row + "* ";
  }
  console.log(row);
}
