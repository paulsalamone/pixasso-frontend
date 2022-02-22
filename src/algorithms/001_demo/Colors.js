import React, { useState, useEffect } from "react";
import Algo2 from "./Algo2";

const Colors = () => {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 100,
    hue: 100,
    saturation: 100,
    brightness: 100,
  });

  return (
    <>
      <Algo2 colors={colors} setColors={setColors} />
    </>
  );
};
export default Colors;
