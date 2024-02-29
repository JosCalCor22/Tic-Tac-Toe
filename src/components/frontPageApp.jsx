import { Turns } from "./variables";

function FrontPageApp ({ startGame }) {
  return(
    <div className="frontpage__container">
      <div className="frontpage__container--title">
        <h2>¡Bienvenidos a mi Tricky</h2>
        <p>Ingresen sus nicknames o nombres y empecemos a jugar 👻</p>
      </div>
      <div className="frontpage__container--info">
        <div className="input1">
          <span>Nombre del Jugador 1:</span>
          <input type="text" id="player1" minLength={2} maxLength={15} required/>
          <span>El jugador 1 será la X</span>
        </div>
        <div className="input2">
          <span>Nombre del Jugador 2:</span>
          <input type="text" id="player2" min={2} max={12} required/>
          <span>El jugador 2 será la 0</span>
        </div>
      </div>
      <div className="frontpage__container--buttons">
        <button onClick={() => {
          let takeValueplayer1 = document.getElementById('player1');
          let takeValueplayer2 = document.getElementById('player2');

          let player1 = takeValueplayer1.value;
          let player2 = takeValueplayer2.value;

          Turns[0].name = player1;
          Turns[1].name = player2;

          startGame();
        }}>¡Empezar!</button>
      </div>
    </div>
)
}

export { FrontPageApp }