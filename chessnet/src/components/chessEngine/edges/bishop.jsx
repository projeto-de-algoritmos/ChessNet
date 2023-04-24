function addEdgesForBishop(graph, position) {
    const [i, j] = position.split(',').map(Number);
    let moves = [];
  
    for (let k = 1; k <= 7; k++) {
      if (i+k > 8 || j+k > 8) break;
      moves.push([i+k, j+k]);
      if (graph.getEdges(`${i+k},${j+k}`).length > 0) break;
    }
    for (let k = 1; k <= 7; k++) {
      if (i+k > 8 || j-k < 1) break;
      moves.push([i+k, j-k]);
      if (graph.getEdges(`${i+k},${j-k}`).length > 0) break;
    }
    for (let k = 1; k <= 7; k++) {
      if (i-k < 1 || j+k > 8) break;
      moves.push([i-k, j+k]);
      if (graph.getEdges(`${i-k},${j+k}`).length > 0) break;
    }
    for (let k = 1; k <= 7; k++) {
      if (i-k < 1 || j-k < 1) break;
      moves.push([i-k, j-k]);
      if (graph.getEdges(`${i-k},${j-k}`).length > 0) break;
    }
  
    moves.forEach(move => {
      const [x, y] = move;
      if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
        graph.addEdge(position, `${x},${y}`);
      }
    });
  }