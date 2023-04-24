class ChessBoard {
    constructor() {
      this.vertices = [];
      this.adjList = new Map();
    }
    
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.adjList.set(vertex, []);
    }
    
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
    
    getVertices() {
      return this.vertices;
    }
    
    getEdges(vertex) {
      return this.adjList.get(vertex);
    }
  }
  
  // create a new chessboard graph
  const chessboard = new ChessBoard();
  
  // add nodes for each cell on the board
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      chessboard.addVertex(`${i},${j}`);
    }
  }
  
 