import React, { useState, useEffect } from 'react';
import './chessboard.css';
import bfs from '../chessEngine/bfs';

const ChessBoard = () => {
  const [dimension, setDimension] = useState(0);
  const [chess, setChess] = useState([]);

  const [end, setEnd] = useState([30, 30]);
  const [steps, setSteps] = useState([]);
  const [blueCells, setBlueCells] = useState([]);

  const black = {
    width: '100px',
    height: '100px',
    backgroundColor: 'black',
  };
  const white = {
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
  };
  const chessBox = {
    width: 100 * dimension,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    boxShadow: `0px 10px 10px rgba(0,0,0,0.1)`,
  };

  const KnightIcon = () => (
    <span style={{fontSize: '80px', color: 'grey'}}>♞</span>
  );


  const [knightPosition, setKnightPosition] = useState(null);

  const makeChessBoard = () => {
    let arr = [];
  
    for (let i = 0; i < dimension; i++) {
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        let backgroundColor = (i + j) % 2 ? 'black' : 'white';
        let isKnightHere = knightPosition && knightPosition[0] === i && knightPosition[1] === j;
        let color = backgroundColor;
        let isBlue = blueCells.some((cell) => cell[0] === i && cell[1] === j);
        color = isBlue ? 'blue' : color;
        if (isKnightHere) {
          temp.push(
            <div style={{ width: '100px', height: '100px', backgroundColor: color }}>
              <KnightIcon />
            </div>
          );
        } else {
          temp.push(
            <div
              style={{ width: '100px', height: '100px', backgroundColor: color }}
              onClick={() => handleClick(i, j)}
              onContextMenu={(e) => handleRightClick(e, i, j)}
            ></div>
          );
        }
      }
      arr.push(temp);
    }
  
    setChess(arr);
  };
  

  const handleClick = (i, j) => {
    if (!knightPosition) {
      setKnightPosition([i, j]);
    } else {
      const result = bfs(knightPosition, [i, j], dimension);
      console.log(result);
      console.log(chess);
      setSteps(result);
      setBlueCells(result); // update blue cells state
    }
  };

  const handleRightClick = (e, i, j) => {
    e.preventDefault();
    if (!knightPosition) {
      setKnightPosition([i, j]);
    } else {
      setKnightPosition([i, j]);
      console.log([i, j]);
    }
  };

  useEffect(() => {
    makeChessBoard();
  }, [dimension, knightPosition, blueCells]);

  return (
    <div className="chess">
      <div>
        <h2>
          <span>N x N </span>
          ChessNet
        </h2>
        <input type="number" placeholder="Digite Dimensoes" onChange={(e) => setDimension(e.target.value)} />
        <div>Passos: {steps.join(' -> ')} </div>

<section style={chessBox}>
  {chess}
</section>
</div>
</div>
)
}

export default ChessBoard
