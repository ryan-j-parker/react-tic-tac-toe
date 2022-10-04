import React, { createContext } from 'react';
import { useState } from 'react';
import { boxes } from '../data/boxesData';
import { WinConditions } from '../data/winConditions';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boxes);

  const [player, setPlayer] = useState('X');

  const setSpace = (id) => {
    setBoard((prevBoard) =>
      prevBoard.map((box) => (box.id === id ? { ...box, value: player } : box))
    );

    setPlayer(player === 'X' ? 'O' : 'X');
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setSpace,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
