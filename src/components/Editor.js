import "../styles/editor.css";
import { useState, useContext, useEffect, useReducer } from "react";
import ProjectName from "./editorComponents/ProjectName";
import Format from "./editorComponents/Format";
import BackgroundSelector from "./editorComponents/BackgroundSelector";
// import Reducer from "./editorComponents/Reducer";
import AlgoContainer from "./editorComponents/AlgoContainer";
import Parameters from "./editorComponents/Parameters";
import Controls from "./editorComponents/Controls";
import StartStop from "./editorComponents/StartStop";
import Refresh from "./editorComponents/Refresh";
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

  return (
    <>
      <main>
        <section className="settings">
          <ProjectName
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
          />

          {/* <Format
          state={state}
          dispatch={dispatch}
          formatWidth={state.formatWidth}
          formatHeight={state.formatHeight}
          /> */}
          <BackgroundSelector
          // state={state}
          // dispatch={dispatch}
          // projectName={state.projectName}
          />
        </section>
        <section className="easel">
          {/* <Controls /> */}
          <div className="controls">
            <AlgoSelector
              state={state}
              dispatch={dispatch}
              algoSelection={state.algoSelection}
            />
            <StartStop />
            <Refresh />

            {/* <p>
          Speed:
          <input type="range" min="-2" max="62" onChange={rateHandler} />
        </p> */}
          </div>

          <AlgoContainer
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
