import "./App.css";
import AppRouter from "./AppRouter";

import { ProjectController } from "./contexts/ProjectContext";
import { AlgoController } from "./contexts/AlgoContext";

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
