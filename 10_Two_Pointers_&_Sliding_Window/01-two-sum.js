/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

// <<---- Brute Force Approach ---->>
var twoSumBruteForce = function (arr, target) {
  // Outer loop: iterate through each element as the first number
  for (let i = 0; i < arr.length - 1; i++) {
    // Inner loop: iterate through remaining elements as the second number
    for (let j = i + 1; j < arr.length; j++) {
      // Calculate sum of current pair
      let sum = arr[i] + arr[j];

      // Check if current pair adds up to the target
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

/**
 * Time Complexity: O(n²) - nested loops iterate through all pairs
 * Space Complexity: O(1) - only using few variables
 */


// <<---- Optimized Approach Using Hash Map ---->>
var twoSum = function (arr, target) {
    // Create a hash map to store array values as keys and their indices as values
    // This allows O(1) lookup time
    let map = new Map;

    // First pass: populate the map with value -> index mappings
    for(let i=0; i<arr.length; i++) {
        map[arr[i]] = i;
    }

    // Second pass: for each element, check if its complement exists in the map
    for(let i=0; i<arr.length; i++) {
        // Calculate what number we need to reach the target sum
        let difference = target - arr[i];

        // Check if the complement exists in the map AND it is not the same element
        // map[difference] checks if complement exists (truthy check)
        // map[difference] !== i ensures we don't use the same element twice
        if(map[difference] && map[difference] !== i) {
            return [i, map[difference]];
        }
    }
}

/**
 * Time Complexity: O(n) - Iterate through the array twice
 * Space Complexity: O(n) - Store up to n elements in the hash map
 */ 

const arr = [1,3,4,2], target = 6;
console.log(twoSum(arr, target));
