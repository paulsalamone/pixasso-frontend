import "../../styles/editor.css";
import Settings from "./Settings";
import Canvas from "./Canvas";
import Parameters from "./Parameters";
import { useState, useEffect } from "react";

const Editor = () => {
  const [BGcolor, setBGcolor] = useState("#aabbcc");

  return (
    <main>
      <Settings setBGcolor={setBGcolor} />
      <Canvas BGcolor={BGcolor} />
    </main>
  );
};

export default Editor;
