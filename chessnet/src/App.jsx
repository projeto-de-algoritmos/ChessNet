import { useState } from "react";
import ChessBoard from "./components/chessboard/chessboard";

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

      if (nextX >= 0 && nextX <= nxn && nextY >= 0 && nextY <= nxn && !visited[next]) {
        queue.push(next);
        visited[next] = true;
        steps[next] = [...steps[curr], next];
      }
    }
  }

  return null;
}

const KnightMoves = () => {
  const [start, setStart] = useState([1, 1]);
  const [end, setEnd] = useState([30, 30]);
  const [steps, setSteps] = useState([]);

  const handleStartChange = (event) => {
    const [x, y] = event.target.value.split(",").map((val) => parseInt(val));
    setStart([x, y]);
  };

  const handleEndChange = (event) => {
    const [x, y] = event.target.value.split(",").map((val) => parseInt(val));
    setEnd([x, y]);
  };

  const handleCalculateClick = () => {
    const result = bfs(start, end ,40);
    setSteps(result);
  };

  return (
    <div>
      <div>
        <label htmlFor="start">Start:</label>
        <input type="text" id="start" value={start} onChange={handleStartChange} />
      </div>
      <div>
        <label htmlFor="end">End:</label>
        <input type="text" id="end" value={end} onChange={handleEndChange} />
      </div>
      <button onClick={handleCalculateClick}>Calculate</button>
      <div>Steps: {steps.join(" -> ")}</div>
    </div>
  );
};

function App(){

  return(

  //  <KnightMoves/>
    <ChessBoard/>
  )
}

export default App