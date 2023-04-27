import React, {useState, useEffect} from 'react'
import './chessboard.css'

const ChessBoard = () => {
  const [dimension, setDimension] = useState(0);
  const [chess, setChess] = useState([]);

  const black = {
    width:"100px",
    height:"100px",
    backgroundColor:'black'
  }
  const white = {
    width:"100px",
    height:"100px",
    backgroundColor:'white'
  }
  const chessBox = {
    width:100*dimension,
    display:'flex',
    flexWrap:'wrap',
    marginTop:"20px",
    boxShadow:`0px 10px 10px rgba(0,0,0,0.1)`
  }
  const knightcolor={
    color: '#f00'
  }

  const [knightPosition, setKnightPosition] = useState(null);

  const makeChessBoard = ()=>{
    let arr = [];

    for (let i=0;i<dimension;i++){
      let temp = [];
      for (let j=0;j<dimension;j++){
        let backgroundColor = (i+j)%2 ? 'black' : 'white';
        let isKnightHere = knightPosition && knightPosition[0] === i && knightPosition[1] === j;
        let color = isKnightHere ? 'green' : backgroundColor;
        temp.push(<div style={{width:"100px", height:"100px", backgroundColor:color}} onClick={() => handleClick(i, j)} onContextMenu={(e) => handleRightClick(e, i, j)}></div>);
      }
      arr.push(temp);
    }

    setChess(arr);
  }

  const handleClick = (i, j) => {
    if (!knightPosition) {
      setKnightPosition([i, j]);
    }
  }

  const handleRightClick = (e, i, j) => {
    e.preventDefault();
    if (!knightPosition) {
      setKnightPosition([i, j]);
    } else {
        setKnightPosition([i, j]);
        console.log([i,j])
      
    }
  }

  useEffect(()=>{
    makeChessBoard();
  })

  return (
    <div className='chess'>
      
      <div>
        <h2>
          <span>N x N </span> 
          ChessBoard
        </h2>
        <input type="number" placeholder='Enter the Dimension' onChange={(e)=>setDimension(e.target.value)} />
      </div>

      <section style={chessBox}>
        {chess}
      </section>

    </div>
  )
}

export default ChessBoard
