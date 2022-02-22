import { useState } from "react";
import data from "./algosData.json";

// const [colors, setColors] = useState(data.colors);

export const handleColors = ({ currentTarget: input }, colors, setColors) => {
  setColors({ ...colors, [input.name]: input.value });
};
