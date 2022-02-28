import "./App.css";
import AppRouter from "./AppRouter";

import { StartStopController } from "./contexts/StartStopContext";
import { AlgoController } from "./contexts/AlgoContext";

function App() {
  return (
    <div className="App">
      <StartStopController>
        <AlgoController>
          <AppRouter />
        </AlgoController>
      </StartStopController>{" "}
    </div>
  );
}

export default App;
