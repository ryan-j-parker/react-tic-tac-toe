import React, { createContext } from 'react';
import { useState } from 'react';
import { boxes } from '../data/boxesData';
import { WinConditions } from '../data/winConditions';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boxes);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Your turn, X');
  const [click, setClick] = useState();

  const [winner, setWinner] = useState(WinConditions);

  const setSpace = (id) => {
    setBoard((prevBoard) =>
      prevBoard.map((box) => (box.id === id ? { ...box, value: player } : box))
    );

    setPlayer(player === 'X' ? 'O' : 'X');
    setMessage(player === 'X' ? 'Your turn, O' : 'Your turn, X');
  };

  //   const message = (player) => {
  //     if (player === 'X') {
  //       return 'Your turn, X';
  //     } else if (player === 'O') {
  //       return 'Your turn, O';
  //     }
  //   };

  return (
    <GameContext.Provider
      value={{
        board,
        setSpace,
        player,
        message,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
