import "./App.css";
import AppRouter from "./AppRouter";

import { StartStopController } from "./contexts/StartStopContext";
import { AlgoController } from "./contexts/AlgoContext";
import { SaveController } from "./contexts/SaveContext";
import { RefreshController } from "./contexts/RefreshContext";
import { BrushController } from "./contexts/BrushContext";

function App() {
  return (
    <div className="App">
      <StartStopController>
        <AlgoController>
          <SaveController>
            <RefreshController>
              <BrushController>
                <AppRouter />
              </BrushController>
            </RefreshController>
          </SaveController>
        </AlgoController>
      </StartStopController>{" "}
    </div>
  );
}

export default App;
