import ColorHarmonizer from "./components/ColorHarmonizer";
import ContrastChecker from "./components/ContrastChecker";
import RandomObject from "./components/RandomObject";

function App() {
  return (
    <div className="App">
      <h1>Teoría de Color</h1>
      <ColorHarmonizer />
      <RandomObject />
      <ContrastChecker />
    </div>
  );
}

export default App;