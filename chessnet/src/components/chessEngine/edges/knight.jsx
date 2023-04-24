
function addEdgesForKnight(graph, position) {
    const [i, j] = position.split(',').map(Number);
    const moves = [
      [i+2, j+1], [i+2, j-1], [i-2, j+1], [i-2, j-1],
      [i+1, j+2], [i+1, j-2], [i-1, j+2], [i-1, j-2]
    ];
  
    moves.forEach(move => {
      const [x, y] = move;
      if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
        graph.addEdge(position, `${x},${y}`);
      }
    });
  }
  
  