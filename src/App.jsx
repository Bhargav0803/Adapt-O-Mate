import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Dummy" animal="Dog" breed="Labrador" />
      <Pet name="Cutie" animal="Cat" breed="Lynx" />
      <Pet name="Sweetie" animal="Sparrow" breed="idk" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));