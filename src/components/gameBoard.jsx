import { Square } from './square';
import { Turns } from './variables';

function GameBoard ({board, updateBoard, selectTurn}){
  return(
    <article className="board__container inactive">
      <h1>¿Quién ganará?</h1>

      <section className='board__game'>
        {
          board.map((square, index) => {
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
        <Square isSelected={ selectTurn === Turns[0].icon}>{Turns[0].icon}</Square>
        <Square isSelected={ selectTurn === Turns[1].icon}>{Turns[1].icon}</Square>
      </section>
    </article>
  )
}

export { GameBoard }