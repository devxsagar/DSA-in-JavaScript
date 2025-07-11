
//✅ Print numbers from n to 1 using recursion
function abc(num) {
    if(num === 0) return; // base case

    console.log(num);
    // num--;
    abc(num-1); // recursive case
}


//✅ Print numbers from n to 1 using recursion
function print1ToN(num,x) {
    if(x > num) return;

    console.log(x);
    print1ToN(num,x+1)
}

// Time complexity: O(n)


const num = 5;
const x = 1;
print1ToN(num,x);