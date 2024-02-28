import { useState } from 'react';
import { COMBOS_WINNER, Turns, status } from './components/variables';
import { Square } from './components/square';
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turns.X);
  const [winner, setWinner] = useState(status.playing);

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
        <h1>Tic-Tac-Toe</h1>
        <section className='board__game'>
          {
            board.map((square , index) => {
              return (
                <Square 
                  key={index} 
                  indexSquare={index}
                  updateBoard={updateBoard}>
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='board__turn'>
          <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
          <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
        </section>

        <section className={className2}>
          {
            winner !== status.playing && (
              <div className="board__text">
                <h2>
                  {
                    winner === status.winner ? `${turn === Turns.X ? 'X' : 'O'} es el ganador`
                    : 'Hubo un empate'
                  }
                </h2>
                <button onClick={resetGame}>Reiniciar Juego</button>
              </div>
            )
          }
        </section>
      </main>
    </>
  )
}

export default App
