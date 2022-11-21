import React, { createContext, useState } from 'react';
import { boxes } from '../data/boxesData';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boxes);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState("Let's play!");
  const [active, setActive] = useState(true);

  const setSpace = (id) => {
    if (!active) return;
    setBoard((prevBoard) =>
      prevBoard.map((box) => (box.id === id ? { ...box, value: player } : box))
    );

    setPlayer(player === 'X' ? 'O' : 'X');
    setMessage(player === 'X' ? 'Your turn, O' : 'Your turn, X');
  };

  const winningGame = () => {
    if (board[0].value === board[1].value && board[1].value === board[2].value) {
      return board[0].value;
    } else if (board[3].value === board[4].value && board[4].value === board[5].value) {
      return board[3].value;
    } else if (board[6].value === board[7].value && board[7].value === board[8].value) {
      return board[6].value;
    } else if (board[0].value === board[3].value && board[3].value === board[6].value) {
      return board[0].value;
    } else if (board[1].value === board[4].value && board[4].value === board[7].value) {
      return board[1].value;
    } else if (board[2].value === board[5].value && board[5].value === board[8].value) {
      return board[2].value;
    } else if (board[0].value === board[4].value && board[4].value === board[8].value) {
      return board[0].value;
    } else if (board[2].value === board[4].value && board[4].value === board[6].value) {
      return board[2].value;
    } else {
      return null;
    }
  };

  const resetGame = () => {
    setActive(false);
    setBoard((prevBoard) => prevBoard.map((box) => ({ ...box, value: '' })));
    setActive(true);
    setPlayer('X');
    setMessage('Good luck!');
  };

  const catsGame = () => {
    return board.filter((box) => box.value === '').length === 0;
  };

  const checkGame = () => {
    if (!active) return;
    const gameWinner = winningGame();
    if (gameWinner) {
      setMessage(`${gameWinner} wins!`);
      setActive(false);
    } else if (catsGame()) {
      setMessage("Cat's game!");
      setActive(false);
    } else {
      return null;
    }
  };
  checkGame();

  return (
    <GameContext.Provider
      value={{
        board,
        setSpace,
        message,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
