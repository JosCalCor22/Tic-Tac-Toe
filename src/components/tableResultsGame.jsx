import { Turns, status } from './variables';

function TableResultGame ({ playerWinner, selectTurn, resetGame, defeatX, defeatO, victoryX, victoryO, revangeGame }) {
  return(
    <>
      {
        playerWinner !== status.playing && (
          <div className="board__result">
            <div className="board__result--title">
              <h2>
                {
                  playerWinner === status.winner ? `${selectTurn === Turns.X ? 'X' : 'O'} es el ganador`
                  : 'Hubo un empate'
                }
              </h2>
              <p>¡Gracias por jugar! <br />¿Revancha o miedo?😎</p>
              <span>Marcador:</span>
            </div>
            <div className="board__result--table">
              <table className='result__table'>
                <thead>
                  <tr>
                    <td>Jugador</td>
                    <td>Victorias</td>
                    <td>Derrotas</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className='result__table--player1'>
                    <td>Player 1</td>
                    <td>{victoryX}</td>
                    <td>{defeatX}</td>
                  </tr>
                  <tr className='result__table--player2'>
                    <td>Player 2</td>
                    <td>{victoryO}</td>
                    <td>{defeatO}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="board__result--buttons">
              <button onClick={revangeGame}>¡Revancha!</button>
              <button onClick={resetGame}>Juego Nuevo</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export { TableResultGame }