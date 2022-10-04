import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

function Board() {

  const { board } = useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="board">

          {board.map((box) => (
            <div className="box" key={box}>
              {box.value}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Board;