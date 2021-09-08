import React from "react";
import { Modeler } from "./components/Modeler";
import { Viewer } from "./components/Viewer";
import { diagrama } from "./assets/test";

function App() {
  return (
    <>
      BPMN TEST
      <Viewer diagramXml={diagrama} />
    </>
  );
}

export default App;
