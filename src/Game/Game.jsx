import "./Game.css";

function Game(props) {
  return (
    <div className={`game ${props.componentClass}`}>
      <img src={props.imgSrc} alt="Game" />
      <div className="overlay">
        <h3>
          <a href={props.link}>{props.description}</a>
        </h3>
      </div>
    </div>
  );
}

export default Game;
