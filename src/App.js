import "./App.css";
import AppRouter from "./AppRouter";
import { AlgoController } from "./algorithms/AlgoContext";

function App() {
  return (
    <div className="App">
      <AlgoController>
        <AppRouter />
      </AlgoController>
    </div>
  );
}

export default App;
