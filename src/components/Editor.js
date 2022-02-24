import "../styles/editor.css";
import { useState, useContext, useEffect, useReducer } from "react";
import ProjectName from "./editorComponents/ProjectName";
import Format from "./editorComponents/Format";
import Background from "./editorComponents/Background";
// import Reducer from "./editorComponents/Reducer";
import Canvas from "./editorComponents/Canvas";
import Parameters from "./editorComponents/Parameters";
import AlgoSelector from "./editorComponents/AlgoSelector";
import { ProjectContext } from "../contexts/ProjectContext";

const Reducer = (state, action) => {
  switch (action.type) {
    case "newProjectName":
      return { ...state, projectName: action.payload };
    case "newFormatWidth":
      return { ...state, formatWidth: action.payload };
    case "newFormatHeight":
      return { ...state, formatHeight: action.payload };
    case "newBGcolor":
      return { ...state, BGcolor: action.payload };
    case "newAlgoSelection":
      return { ...state, algoSelection: action.payload };
    case "newParameterA":
      return { ...state, parameterA: action.playload };
    default:
      throw new Error();
  }
};

const Editor = () => {
  const [project, setProject] = useContext(ProjectContext);
  const [state, dispatch] = useReducer(Reducer, {
    projectName: "my-project",
    formatHeight: 400,
    formatWidth: 400,
    BGcolor: "#CCCCCC",
    algoSelection: "algo1",
    parameterA: 30,
  });

  function refreshPage() {
    window.location.reload(false);
    setProject({ ...project, hue: 0 });
    setProject({ ...project, saturation: 0 });
    setProject({ ...project, brightness: 50 });
  }

  // const [backgroundColor, setBackgroundColor] = useState("$")

  const [AA, setAA] = useState(30);

  console.log("Editor: " + state.parameterA);
  return (
    <>
      <main>
        <section className="settings">
          <ProjectName
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
          />
          <AlgoSelector
            state={state}
            dispatch={dispatch}
            algoSelection={state.algoSelection}
          />
          {/* <Format
          state={state}
          dispatch={dispatch}
          formatWidth={state.formatWidth}
          formatHeight={state.formatHeight}
          /> */}
          <Background
          // state={state}
          // dispatch={dispatch}
          // projectName={state.projectName}
          />
        </section>
        <section className="easel">
          <div className="controls">
            <p>
              Controls:
              <button onClick={refreshPage}>refresh</button>
              ... start/stop ... speed
            </p>
          </div>

          <Canvas
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
            formatWidth={state.formatWidth}
            formatHeight={state.formatHeight}
            BGcolor={state.BGcolor}
            algoSelection={state.algoSelection}
            parameterA={state.parameterA}
          />

          <div className="utilities">
            <button>save</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Editor;
