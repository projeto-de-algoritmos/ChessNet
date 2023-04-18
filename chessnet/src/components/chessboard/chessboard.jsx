import React, { useState } from 'react';

import './chessboard.css'

function ChessSquare({ x, y }) {
  const [hasPiece, setHasPiece] = useState(false);

  return (
    <div id='chesssquare'
      style={{
        backgroundColor: (x + y) % 2 === 0 ? 'white' : 'gray',
       
      }}
      onClick={() => setHasPiece(!hasPiece)}
    >
      {hasPiece && <div style={{ fontSize: '32px' }}></div>}
    </div>
  );
}

function ChessBoard() {
  const board = [];
  for (let x = 0; x < 8; x++) {
    const row = [];
    for (let y = 0; y < 8; y++) {
      row.push(<ChessSquare key={`${x}-${y}`} x={x} y={y} />);
    }
    board.push(
      <div key={x} style={{ display: 'flex' }}>
        {row}
      </div>
    );
  }
  return <div>{board}</div>;
}

export default ChessBoard;
