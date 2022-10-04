import React, { createContext } from 'react';
import { useState } from 'react';
import { boxes } from '../data/Boxes';
import { WinConditions } from '../data/WinConditions';

const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [player, setPlayer] = useState();
    
    
  return <GameContext.Provider value={{

  }}>
    {children}
  </GameContext.Provider>;

};


export { GameProvider, GameContext };