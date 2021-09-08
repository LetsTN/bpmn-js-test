/* eslint-disable no-unused-vars */
// import customDraw from '../customDiagram/Draw';
// @ts-ignore
import BpmnViewer from "bpmn-js/lib/Viewer";
import { diagrama } from "../../assets/diagrama";

interface BpmnInstanceProps {
  idContainer: string;
}

export class BpmnViewerInstance {
  private viewer: any;

  constructor({ idContainer }: BpmnInstanceProps) {
    this.viewer = new BpmnViewer({
      container: `#${idContainer}`,
      keyboard: {
        bindTo: window,
      },
      // additionalModules: [customDraw],
    });
  }

  async openDiagram(xml?: string) {
    try {
      const diagramSolicited = xml || diagrama;

      await this.viewer.importXML(diagramSolicited);
      this.autoResize();
    } catch (err) {
      console.error(err);
    }
  }

  autoResize() {
    this.viewer.get("canvas").zoom("fit-viewport");
    // const currentViewbox = this.viewer.get('canvas').viewbox();

    // const elementMid = {
    //   x: currentViewbox.inner.x + currentViewbox.width / (currentViewbox.width / 320),
    //   y: currentViewbox.inner.y + currentViewbox.height / 2,
    // };

    // this.viewer.get('canvas').viewbox({
    //   x: elementMid.x - currentViewbox.width / 2,
    //   y: elementMid.y - currentViewbox.height / 2,
    //   width: currentViewbox.width,
    //   height: currentViewbox.height,
    // });
  }
}
