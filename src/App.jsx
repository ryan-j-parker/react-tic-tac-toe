import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <>
      <div className="App">
        <div className="title">
          <h1>Alchemy Tic-Tac-Toe</h1>
          <h5>(for Americans)</h5>
        </div>
        <Board />
      </div>
    </>
  );
}

export default App;