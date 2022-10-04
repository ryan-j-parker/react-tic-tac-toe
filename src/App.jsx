import { useContext } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { GameContext } from './context/GameContext';

function App() {
  const { message } = useContext(GameContext);

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>Alchemy Tic-Tac-Toe</h1>
          <h5>{message}</h5>
        </div>
        <Board />
      </div>
    </>
  );
}

export default App;
