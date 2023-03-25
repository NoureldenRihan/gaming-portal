import "./GamesCatalog.css";

function GamesCatalog() {
  return (
    <div className="GamesCatalog">
      <div className="mainGame">
        <img src="/Images/Gaming.jpg" alt="Game 1" />
        <div className="data">
          <h1>Play Amazing Games!</h1>
          <h3>
            Designed by{" "}
            <a href="https://www.linkedin.com/in/remon-magdy-223218230">
              Remon Magdy
            </a>
          </h3>
          <h3>
            Developed by{" "}
            <a href="https://nourelden-rihan.pages.dev">Nourelden Rihan</a>
          </h3>
          <button>Play Now</button>
        </div>
      </div>
      <div className="sideGames">
        <div className="game">
          <img src="/Images/Battlefield.jpg" alt="Game 2" />
          <div className="data">
            <h2>Battlefield</h2>
          </div>
        </div>
        <div className="game">
          <img src="/Images/Call of duty.jpg" alt="Game 3" />
          <div className="data">
            <h2>Fortnite</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesCatalog;
