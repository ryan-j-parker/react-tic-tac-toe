import React, { createContext } from 'react';
import { useState } from 'react';
import { boxes } from '../data/boxesData';
import { WinConditions } from '../data/winConditions';

const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [board, setBoard] = useState(boxes);
  
//   const [player, setPlayer] = useState('');
    
  const setX = () => {

  };
    
  return <GameContext.Provider value={{
    board,
  }}>
    {children}
  </GameContext.Provider>;

};


export { GameProvider, GameContext };