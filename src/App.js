import "./App.css";
import AppRouter from "./AppRouter";
import { AlgoController } from "./algorithms/AlgoContext";
import { ProjectController } from "./contexts/ProjectContext";

function App() {
  return (
    <div className="App">
      <ProjectController>
        <AlgoController>
          <AppRouter />
        </AlgoController>
      </ProjectController>{" "}
    </div>
  );
}

export default App;
