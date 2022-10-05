import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

function Board() {
  const { board, setSpace, active, resetGame } = useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((box) => (
            <div
              className="box"
              key={box.id}
              onClick={box.value === '' ? () => setSpace(box.id) : null}
            >
              {box.value}
            </div>
          ))}
          {!active && <button onClick={() => resetGame()}>Play again</button>}
        </div>
      </div>
    </>
  );
}

export default Board;
