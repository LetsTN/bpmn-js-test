import React, { useEffect } from "react";
// @ts-ignore
import BpmnViewer from "bpmn-js";
import { diagrama } from "../../assets/diagrama";

export function Viewer() {
  const viewer = new BpmnViewer();

  useEffect(() => {
    viewer.attachTo("#viewer");

    viewer.importXML(diagrama, function (err: any) {
      if (err) {
        return console.error("could not import BPMN 2.0 diagram", err);
      }

      let canvas = viewer.get("canvas");

      canvas.zoom("fit-viewport");
    });
  });

  return (
    <div
      id="viewer"
      style={{
        border: "1px solid #000000",
        height: "90vh",
        width: "90vw",
        margin: "auto",
      }}
    ></div>
  );
}
