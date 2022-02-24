import "../styles/editor.css";
import { useState, useContext, useEffect, useReducer } from "react";

import AlgoContainer from "./editorComponents/AlgoContainer";

import StartStop from "./editorComponents/StartStop";
import Refresh from "./editorComponents/Refresh";
import AlgoSelector from "./editorComponents/AlgoSelector";

const Reducer = (state, action) => {
  switch (action.type) {
    case "newAlgoSelection":
      return { ...state, algoSelection: action.payload };
    default:
      throw new Error();
  }
};

const Editor = () => {
  // const [state, dispatch] = useReducer(Reducer, {
  //   algoSelection: "algo1",
  // });

  return (
    <>
      <main>
        {/* <section className="settings">
          <ProjectName
            state={state}
            dispatch={dispatch}
            projectName={state.projectName}
          />
          <BackgroundSelector />
        </section> */}

        <section className="easel">
          {/* <Controls /> */}
          <div className="controls">
            <AlgoSelector
            // state={state}
            // dispatch={dispatch}
            // algoSelection={state.algoSelection}
            />
            <Refresh />
            <StartStop />

            {/* <p>
          Speed:
          <input type="range" min="-2" max="62" onChange={rateHandler} />
        </p> */}
          </div>
          {/* <div className="controls">
            <div>BG color</div>
            <div>Format</div>
          </div> */}

          <AlgoContainer
          // state={state}
          // dispatch={dispatch}
          // projectName={state.projectName}
          // formatWidth={state.formatWidth}
          // formatHeight={state.formatHeight}
          // BGcolor={state.BGcolor}
          // algoSelection={state.algoSelection}
          // parameterA={state.parameterA}
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
