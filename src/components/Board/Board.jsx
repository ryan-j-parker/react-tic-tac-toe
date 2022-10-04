import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

function Board() {

  const { board } = useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="board">
          <div className="box" id="0"></div>
          <div className="box" id="1"></div>
          <div className="box" id="2"></div>
          <div className="box" id="3"></div>
          <div className="box" id="4"></div>
          <div className="box" id="5"></div>
          <div className="box" id="6"></div>
          <div className="box" id="7"></div>
          <div className="box" id="8"></div>
        </div>
      </div>
    </>
  );
}

export default Board;