function iterativeSolution(n) {
    const fib = [0,1];

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}
// Time: O(n), Space: O(n);


function iterativeSolutionOptimized(n) {
    if(n <= 1) return n;

    let prev = 0;
    let curr = 1;

    for(let i=2; i<=n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}
// Time: O(n), Space: O(1);


function recursiveSolution(n) {
    if(n <= 1) return n;

    return recursiveSolution(n-1) + recursiveSolution(n-2)
}
// Time complexity: O(2^n)

const ans = iterativeSolutionOptimized(5);
console.log(ans);