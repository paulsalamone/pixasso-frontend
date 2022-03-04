import "./App.css";
import AppRouter from "./AppRouter";

import { StartStopController } from "./contexts/StartStopContext";
import { AlgoController } from "./contexts/AlgoContext";
//import { UserController } from "./contexts/UserContext";
import { SaveController } from "./contexts/SaveContext";
import { RefreshController } from "./contexts/RefreshContext";
import { BrushController } from "./contexts/BrushContext";
import { BackgroundController } from "./contexts/BackgroundContext";

function App() {
  return (
    <div className="App">
      <StartStopController>
        <AlgoController>
          <SaveController>
            <RefreshController>
              <BrushController>
                <BackgroundController>
                  <AppRouter />
                </BackgroundController>
              </BrushController>
            </RefreshController>
          </SaveController>
        </AlgoController>
      </StartStopController>
    </div>
  );
}

export default App;
