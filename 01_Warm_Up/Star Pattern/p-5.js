            // 1 2 3 4 
            // 1 2 3 
            // 1 2 
            // 1 


let n = 4;

// for(let i=n; i>0; i--) {
//     let row = " ";
//     for(let j=0; j<i; j++) {
//         row = row + (j+1) + " ";
//     }
//     console.log(row);
// }

// ➡️ Another way we can do this

for(let i=0; i<n; i++) {
    let row = " ";
    for(let j=0; j<n-i; j++) {
        row = row + (j+1) + " ";
    }
    console.log(row);
}