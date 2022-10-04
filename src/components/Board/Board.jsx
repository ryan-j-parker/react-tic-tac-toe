import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

function Board() {
  const { board, setSpace } = useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((box) => (
            <div className="box" key={box.id} onClick={() => setSpace(box.id)}>
              {box.value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Board;
