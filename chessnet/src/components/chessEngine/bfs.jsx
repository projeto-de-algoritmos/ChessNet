function bfs(start, end ,nxn) {
    const queue = [start];
    const visited = {};
    const steps = {};
  
    visited[start] = true;
    steps[start] = [];
  
    while (queue.length > 0) {
      const curr = queue.shift();
      const currX = curr[0];
      const currY = curr[1];
  
      if (curr[0] === end[0] && curr[1] === end[1]) {
        return steps[curr];
      }
  
      const possibleMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
      ];
  
      for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i];
        const nextX = currX + move[0];
        const nextY = currY + move[1];
        const next = [nextX, nextY];
  
        if (nextX >= 0 && nextX <= nxn-1 && nextY >= 0 && nextY <= nxn-1 && !visited[next]) {
          queue.push(next);
          visited[next] = true;
          steps[next] = [...steps[curr], next];
        }
      }
    }
  
    return null;
  }
  export default bfs