
                    //  1
                    //  10
                    //  101
                    //  1010


let n = 4;

for(let i = 0; i < n; i++) {
    let row = " ", toggle = 1;
    for(let j = 0; j <= i; j++) {
        row = row + toggle;
        toggle === 1 ? toggle = 0 : toggle = 1;
    }
    console.log(row);
}