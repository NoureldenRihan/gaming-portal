import "./App.css";
import GamesCatalog from "./GamesCatalog/GamesCatalog";
import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar/VerticaNavbar";

function App() {
  return (
    <div className="App">
      <VerticalNavbar />
      <section>
        <main>
          <HorizontalNavbar />
          <GamesCatalog />
        </main>
      </section>
    </div>
  );
}

export default App;
