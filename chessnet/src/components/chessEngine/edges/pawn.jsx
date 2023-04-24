function addEdgesForPawn(graph, position) {
    const [i, j] = position.split(',').map(Number);
    let moves = [];
  
    // assume white pawns for simplicity
    moves.push([i+1, j]);
    if (i === 2) moves.push([i+2, j]);
  
    moves.forEach(move => {
      const [x, y] = move;
      if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
        graph.addEdge(position, `${x},${y}`);
      }
    });
  }