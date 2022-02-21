import "../styles/editor.css";
import { useState, useEffect, useReducer } from "react";
import ProjectName from "./editorComponents/ProjectName";
import Format from "./editorComponents/Format";
import Background from "./editorComponents/Background";
// import Reducer from "./editorComponents/Reducer";
import Canvas from "./editorComponents/Canvas";

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
    default:
      throw new Error();
  }
};

const Editor = () => {
  const [state, dispatch] = useReducer(Reducer, {
    projectName: "my-project",
    formatHeight: 500,
    formatWidth: 500,
    BGcolor: "#CCCCCC",
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
          <Format
            state={state}
            dispatch={dispatch}
            formatWidth={state.formatWidth}
            formatHeight={state.formatHeight}
          />
          <Background
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
          />
        </section>
        <section className="easel">
          <Canvas
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
            formatWidth={state.formatWidth}
            formatHeight={state.formatHeight}
            BGcolor={state.BGcolor}
          />
        </section>
      </main>
    </>
  );
};

export default Editor;
