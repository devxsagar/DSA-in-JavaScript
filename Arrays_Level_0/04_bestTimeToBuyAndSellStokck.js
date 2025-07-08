
//✅ Brute Force Approach

function bestTimeToBuyAndSellStock(arr) {
    let bestValue = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let diff = arr[j] - arr[i];
            if(diff > bestValue) {
                bestValue = diff;
            }
        }
    }
    return bestValue;
}

//✅ Optimized approach
function bestTimeToBuyAndSellStockOptimized(arr) {
    let min = arr[0];
    let maxProfit = 0;

    for(let i = 1; i < arr.length; i++) {
        let diff = arr[i] - min;

        // find max profit
        if(diff > maxProfit) {
            maxProfit = diff;
        }
        
        // find the lowest value to buy stock
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return maxProfit;
}

const arr = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyAndSellStockOptimized(arr)); 