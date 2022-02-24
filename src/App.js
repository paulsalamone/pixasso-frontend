import "./App.css";
import AppRouter from "./AppRouter";

import { ProjectController } from "./contexts/ProjectContext";

function App() {
  return (
    <div className="App">
      <ProjectController>
        <AppRouter />
      </ProjectController>{" "}
    </div>
  );
}

export default App;
