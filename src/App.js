import "./App.css";
import AppRouter from "./AppRouter";

import { StartStopController } from "./contexts/StartStopContext";
import { AlgoController } from "./contexts/AlgoContext";
import { SaveController } from "./contexts/SaveContext";
import { Algo3Controller } from "./components/algorithms/Algo3Context";
import { RefreshController } from "./contexts/RefreshContext";

function App() {
  return (
    <div className="App">
      <StartStopController>
        <AlgoController>
          <SaveController>
            <RefreshController>
              <Algo3Controller>
                <AppRouter />
              </Algo3Controller>
            </RefreshController>
          </SaveController>
        </AlgoController>
      </StartStopController>{" "}
    </div>
  );
}

export default App;
