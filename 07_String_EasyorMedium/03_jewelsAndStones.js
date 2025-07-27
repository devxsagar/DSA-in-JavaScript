const jewels = "aA",
  stones = "aAAbbbb";

// ✅ Approach 1 - Brute Force
function solution1(jewels, stones) {
  let count = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }

  return count;
}

// ⌛Time: O(m*n) 💾Space: O(1)



// ✅ Approach 2 - Hashmap/Set
function solution2(jewels, stones) {
  let count = 0;
  let set = new Set();

  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }

  for (let j = 0; j < stones.length; j++) {
    if (set.has(stones[j])) {
      count++;
    }
  }

  return count;
}

console.log(solution2(jewels, stones));

// ⌛Time: O(m+n) 💾Space: O(m)