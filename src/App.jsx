import { useState } from 'react';
import { GameBoard } from './components/gameBoard';
import { TableResultGame } from './components/tableResultsGame';
import { COMBOS_WINNER, Turns, status } from './components/variables';
import './styles/App.css';
import './styles/FrontPageApp.css';

function App() {
  /* States for the componets */
  const [frontPageGame, setFrontPageGame] = useState(false);
  const [pageBoardGame, setPageBoardGame] = useState(true);
  const [resultGame, setResultGame] = useState(false);

  /* States for the game */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(status.playing);
  const [turn, setTurn] = useState(Turns.X);
  
  /* States for the table */
  const [victoryX, setVictoryX] = useState(0);
  const [defeatX, setDefeatX] = useState(0);
  const [defeatO, setDefeatO] = useState(0);
  const [victoryO, setVictoryO] = useState(0);

  const className2 = resultGame ? 'board__decision' : 'inactive';
  
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
        setResultGame(true);
        setPageBoardGame(false);

        if(boardCheck[a] === Turns.X){
          setVictoryX(victoryX + 1);
          setDefeatO(defeatO + 1);
        } else{
          setVictoryO(victoryO + 1);
          setDefeatX(defeatX + 1);
        }

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
    setDefeatO(0);
    setDefeatX(0);
    setVictoryX(0);
    setVictoryO(0);
    setTurn(Turns.X);
    setResultGame(false);
    setPageBoardGame(true);
    setWinner(status.playing);
    setBoard(Array(9).fill(null));
  }

  const revangeGame = () => {
    setPageBoardGame(true);
    setWinner(status.playing);
    setBoard(Array(9).fill(null));
  }

  return (
    <>
      <main className='board'>
        { pageBoardGame ? (
            <GameBoard board={board} updateBoard={updateBoard} selectTurn={turn} />
        ) : resultGame ? (
          <section className={className2}>
            <TableResultGame 
            selectTurn={turn} 
            defeatX={defeatX}
            defeatO={defeatO}
            victoryX={victoryX}
            victoryO={victoryO}
            playerWinner={winner} 
            resetGame={resetGame}
            revangeGame={revangeGame} />
          </section>
        ) : (
          null
        )
        }
      </main>
    </>
  )
}

export default App
