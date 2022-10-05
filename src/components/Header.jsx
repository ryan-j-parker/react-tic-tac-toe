import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './Header.css';

function Header() {
  const { message, active, resetGame } = useContext(GameContext);

  return (
    <div className="title">
      <h1>Alchemy Tic-Tac-Toe</h1>
      <h4>{message}</h4>
      <div className="reset">
        {!active && (
          <button onClick={() => resetGame()} className="reset-button">
            Play again
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
