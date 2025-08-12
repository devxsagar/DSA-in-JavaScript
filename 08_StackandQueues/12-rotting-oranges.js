// Approach Used: BFS -> Breadth First Approach
const grid = [[2,1,1],[0,1,1],[1,0,1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
  let m = grid.length; // number of rows
  let n = grid[0].length; // number of columns
  let queue = []; // queue for BFS (stores [row, col, minutes])


  // add all initially rotten oranges to the queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]); // rotten orange with time 0
      }
    }
  }


  let maxMinutes = 0; // track maximum minutes required

  // BFS -> mark adjacent nodes as rotten and push in queue till it is not empty
  while (queue.length) {
    let [x, y, minutes] = queue.shift();

    // check top
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, minutes + 1]);
    }

    // check bottom 
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, minutes + 1]);
    }

    // check right
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, minutes + 1]);
    }

    // check left
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, minutes + 1]);
    }

    // update maximum time taken so far
    maxMinutes = Math.max(minutes, maxMinutes);
  }

  // check if any fresh orange is left after BFS
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMinutes; // total minutes needed to rot all oranges
};

let ans = orangesRotting(grid);
console.log(ans);
