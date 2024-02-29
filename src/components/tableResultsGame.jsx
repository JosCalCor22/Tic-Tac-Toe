import { Turns, status } from './variables';

function TableResultGame ({playerWinner, selectTurn, resetGame}){
  return(
    <>
      {
        playerWinner !== status.playing && (
          <div className="board__text">
            <h2>
              {
                playerWinner === status.winner ? `${selectTurn === Turns.X ? 'X' : 'O'} es el ganador`
                : 'Hubo un empate'
              }
            </h2>
            <button onClick={resetGame}>Reiniciar Juego</button>
          </div>
        )
      }
    </>
  )
}

export { TableResultGame }