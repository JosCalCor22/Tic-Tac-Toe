import { useState } from 'react';
import { GameBoard } from './components/gameBoard';
import { TableResultGame } from './components/tableResultsGame';
import { COMBOS_WINNER, Turns, status } from './components/variables';
import './styles/App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(status.playing);
  const [turn, setTurn] = useState(Turns.X);

  const className2 = winner !== status.playing ? 'board__decision' : 'inactive';
  
  const newBoard = [...board];

  const checkWinner = (boardCheck) => {
    const isDraw = newBoard.every((square) => square !== null);

    for( const combo of COMBOS_WINNER){
      const [a, b, c] = combo;
      if(
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ){
        setTurn(boardCheck[a]);
        setWinner(status.winner);
      } else{
        if(isDraw){
          setWinner(status.draw);
        }
      }
    }
  }

  const updateBoard = (index) => {
    /* No permitir sobreescribir un valor*/
    if(board[index]){
        alert('Selecciona un espacio vacio');
        return;
    } else if (winner){
        return;
    }

    /* Cambiar el turno */
    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    
    if(winner !== status.winner){
      /* Actualizar el tablero */
      newBoard[index] = turn;
      setBoard(newBoard);
      /* Actualizar el turno */
      setTurn(newTurn);
      /* Verificar si hay ganador */
      checkWinner(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(status.playing);
  }

  return (
    <>
      <main className='board'>
        <GameBoard board={board} updateBoard={updateBoard} selectTurn={turn} />

        <section className={className2}>
          <TableResultGame playerWinner={winner} selectTurn={turn} resetGame={resetGame} />
        </section>
      </main>
    </>
  )
}

export default App
