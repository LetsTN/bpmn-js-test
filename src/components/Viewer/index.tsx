/* eslint-disable no-unused-vars */
import { BpmnViewerInstance } from "../../services/viewer";
import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { Container } from "./styles";

interface DiagramViewProps {
  diagramXml: string;
}

export function Viewer({ diagramXml }: DiagramViewProps) {
  const idDom = useMemo(() => {
    return `bpmnContainer`;
  }, []);

  const removeOldDiagramOfDom = useCallback(() => {
    const element = document.getElementById(idDom);
    if (element) {
      element.innerHTML = "";
    }
  }, [idDom]);

  useEffect(() => {
    if (diagramXml) {
      const BpmnModeler = new BpmnViewerInstance({
        idContainer: idDom,
      });

      BpmnModeler.openDiagram(diagramXml);
    }

    return removeOldDiagramOfDom;
  }, [diagramXml, idDom, removeOldDiagramOfDom]);

  return (
    <Container>
      <div className="div-container-bpmn" id={idDom}></div>
    </Container>
  );
}
