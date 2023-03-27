import "./App.css";
import Games from "./Games/Games";
import GamesCatalog from "./GamesCatalog/GamesCatalog";
import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import Logos from "./Logos/Logos";
import VerticalNavbar from "./VerticalNavbar/VerticaNavbar";

function App() {
  return (
    <div className="App">
      <VerticalNavbar />
      <section>
        <main>
          <HorizontalNavbar />
          <GamesCatalog />
          <Logos />
          <Games />
        </main>
      </section>
    </div>
  );
}

export default App;
