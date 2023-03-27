import "./Game.css";

function Game(props) {
  return (
    <div className="game">
      <img src={props.imgSrc} alt="Game" />
      <div className="overlay"></div>
    </div>
  );
}

export default Game;
