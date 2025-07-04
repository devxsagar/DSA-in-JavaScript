        //  1 
        //  2 2 
        //  3 3 3 
        //  4 4 4 4 

// 💡NOTE: The value of "i" will be printed instead of "j".

let n = 4;

for(let i=0; i<n; i++) {
    let row = " ";
    for(let j=0; j<=i; j++) {
        row = row + (i+1) + " ";
    }
    console.log(row);
}
