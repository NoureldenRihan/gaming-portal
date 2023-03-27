import Game from "../Game/Game";
import "./Games.css";

function Games() {
  return (
    <div className="games">
      <Game
        componentClass="l2"
        imgSrc="/Images/Game 1.jpg"
        link="https://www.freepik.com/free-photo/military-helicopter-render-3d-illustration_27222091.htm#query=war&position=34&from_view=search&track=sph"
        description="Image by viarprodesign on Freepik"
      />
      <Game
        componentClass="l1"
        imgSrc="/Images/Game 2.jpg"
        link="https://www.freepik.com/free-photo/city-tornado-doomsday-scene-illustration_14402247.htm#query=war&position=1&from_view=search&track=sph"
        description="Image by liuzishan on Freepik"
      />
      <Game
        componentClass="c"
        imgSrc="/Images/Game 3.jpg"
        link="https://www.freepik.com/free-photo/cruel-war-scenes-digital-painting_15174538.htm#query=war&position=0&from_view=search&track=sph"
        description="Image by liuzishan on Freepik"
      />
      <Game
        componentClass="r1"
        imgSrc="/Images/Game 4.jpg"
        link="https://unsplash.com/photos/x7EkH3S6EjU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        description="Image by felipepelaquim on Unsplash"
      />
      <Game
        componentClass="r2"
        imgSrc="/Images/Game 5.jpg"
        link="https://www.pexels.com/photo/battle-black-blur-board-game-260024/"
        description="Image by Pixabay on Pixabay"
      />
    </div>
  );
}

export default Games;
