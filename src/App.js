import "./App.css";
import AppRouter from "./AppRouter";
import { AlgoController } from "./contexts/AlgoContext";
import { ParametersController } from "./contexts/ParametersContext";

function App() {
  return (
    <div className="App">
      <AlgoController>
        <ParametersController>
          <AppRouter />
        </ParametersController>
      </AlgoController>
    </div>
  );
}

export default App;
