import "./App.css";
import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar/VerticaNavbar";

function App() {
  return (
    <div className="App">
      <VerticalNavbar />
      <section>
        <main>
          <HorizontalNavbar />
        </main>
      </section>
    </div>
  );
}

export default App;
