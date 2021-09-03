import React from "react";
// @ts-ignore
import BPMNModeler from "bpmn-js/lib/Modeler";
// @ts-ignore
// import propertiesPanelModule from "bpmn-js-properties-panel";
// @ts-ignore
// import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { diagrama } from "../../assets/diagrama";

export function Modeler() {
  const container = document.getElementById("modeler");

  let modeler: any;

  if (diagrama.length > 0) {
    modeler = new BPMNModeler({
      container,
      keyboard: {
        bindTo: document,
      },
    });

    modeler
      .importXML(diagrama)
      .then((props: { warnings: string | any[] }) => {
        if (props.warnings.length) {
          console.log("Warnings", props.warnings);
        }
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }

  const handleClick = () => {
    // console.log(modeler.toXML);
    modeler.saveXML(
      modeler.definitions,
      { format: true },
      function (err: any, updatedXML: any) {
        console.log(updatedXML);
      }
    );
  };

  return (
    <div className="App">
      <div
        id="modeler"
        style={{
          border: "1px solid #000000",
          height: "90vh",
          width: "90vw",
          margin: "auto",
        }}
      ></div>

      <button onClick={handleClick}>LOG</button>
    </div>
  );
}
