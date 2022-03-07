import "./App.css";
import AppRouter from "./AppRouter";

import { ProjectController } from "./contexts/ProjectContext";
import { AlgoController } from "./contexts/AlgoContext";
import { UserController } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserController>
        <ProjectController>
          <AlgoController>
            <AppRouter />
          </AlgoController>
        </ProjectController>
      </UserController>
    </div>
  );
}

export default App;
