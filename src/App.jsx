import Canvas from "./canvas";
import BackgroundFX from "./components/BackgroundFX";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import state from "./store";
import { useSnapshot } from "valtio";

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {snap.intro && <BackgroundFX />}
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
