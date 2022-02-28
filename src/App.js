import "./App.css";
import AppRouter from "./AppRouter";

import { StartStopController } from "./contexts/StartStopContext";
import { AlgoController } from "./contexts/AlgoContext";
import { SaveController } from "./contexts/SaveContext";

function App() {
  return (
    <div className="App">
      <StartStopController>
        <AlgoController>
          <SaveController>
            <AppRouter />
          </SaveController>
        </AlgoController>
      </StartStopController>{" "}
    </div>
  );
}

export default App;
