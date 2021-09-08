export const diagrama = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
<bpmn2:process id="Process_1" isExecutable="false">
<bpmn2:startEvent id="StartEvent_1" name="seila">
<bpmn2:outgoing>Flow_0uronvj</bpmn2:outgoing>
</bpmn2:startEvent>
<bpmn2:exclusiveGateway id="Gateway_18vpkt9" name="mano?">
<bpmn2:incoming>Flow_0uronvj</bpmn2:incoming>
<bpmn2:outgoing>Flow_0gvn11q</bpmn2:outgoing>
<bpmn2:outgoing>Flow_0phhcy0</bpmn2:outgoing>
</bpmn2:exclusiveGateway>
<bpmn2:task id="Activity_1viuooy" name="funfou">
<bpmn2:incoming>Flow_0gvn11q</bpmn2:incoming>
<bpmn2:outgoing>Flow_0zolqb1</bpmn2:outgoing>
</bpmn2:task>
<bpmn2:task id="Activity_0lxiv04" name="n funfou">
<bpmn2:incoming>Flow_0phhcy0</bpmn2:incoming>
<bpmn2:outgoing>Flow_1raatfa</bpmn2:outgoing>
</bpmn2:task>
<bpmn2:task id="Activity_0da6a1j" name="outro trem">
<bpmn2:incoming>Flow_0zolqb1</bpmn2:incoming>
<bpmn2:incoming>Flow_1raatfa</bpmn2:incoming>
<bpmn2:outgoing>Flow_0wephqo</bpmn2:outgoing>
</bpmn2:task>
<bpmn2:endEvent id="Event_1g6ek3k" name="finaliza sei la">
<bpmn2:incoming>Flow_0wephqo</bpmn2:incoming>
</bpmn2:endEvent>
<bpmn2:sequenceFlow id="Flow_0uronvj" sourceRef="StartEvent_1" targetRef="Gateway_18vpkt9" />
<bpmn2:sequenceFlow id="Flow_0gvn11q" sourceRef="Gateway_18vpkt9" targetRef="Activity_1viuooy" />
<bpmn2:sequenceFlow id="Flow_0zolqb1" sourceRef="Activity_1viuooy" targetRef="Activity_0da6a1j" />
<bpmn2:sequenceFlow id="Flow_0wephqo" sourceRef="Activity_0da6a1j" targetRef="Event_1g6ek3k" />
<bpmn2:sequenceFlow id="Flow_0phhcy0" sourceRef="Gateway_18vpkt9" targetRef="Activity_0lxiv04" />
<bpmn2:sequenceFlow id="Flow_1raatfa" sourceRef="Activity_0lxiv04" targetRef="Activity_0da6a1j" />
</bpmn2:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNEdge id="Flow_0uronvj_di" bpmnElement="Flow_0uronvj">
<di:waypoint x="288" y="380" />
<di:waypoint x="405" y="380" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0gvn11q_di" bpmnElement="Flow_0gvn11q">
<di:waypoint x="455" y="380" />
<di:waypoint x="580" y="380" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0zolqb1_di" bpmnElement="Flow_0zolqb1">
<di:waypoint x="680" y="380" />
<di:waypoint x="820" y="380" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0wephqo_di" bpmnElement="Flow_0wephqo">
<di:waypoint x="920" y="380" />
<di:waypoint x="1082" y="380" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0phhcy0_di" bpmnElement="Flow_0phhcy0">
<di:waypoint x="430" y="405" />
<di:waypoint x="430" y="520" />
<di:waypoint x="580" y="520" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_1raatfa_di" bpmnElement="Flow_1raatfa">
<di:waypoint x="680" y="520" />
<di:waypoint x="870" y="520" />
<di:waypoint x="870" y="420" />
</bpmndi:BPMNEdge>
<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
<dc:Bounds x="252" y="362" width="36" height="36" />
<bpmndi:BPMNLabel>
<dc:Bounds x="259" y="405" width="23" height="14" />
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Gateway_18vpkt9_di" bpmnElement="Gateway_18vpkt9" isMarkerVisible="true">
<dc:Bounds x="405" y="355" width="50" height="50" />
<bpmndi:BPMNLabel>
<dc:Bounds x="413" y="325" width="34" height="14" />
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1viuooy_di" bpmnElement="Activity_1viuooy">
<dc:Bounds x="580" y="340" width="100" height="80" />
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_0lxiv04_di" bpmnElement="Activity_0lxiv04">
<dc:Bounds x="580" y="480" width="100" height="80" />
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_0da6a1j_di" bpmnElement="Activity_0da6a1j">
<dc:Bounds x="820" y="340" width="100" height="80" />
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Event_1g6ek3k_di" bpmnElement="Event_1g6ek3k">
<dc:Bounds x="1082" y="362" width="36" height="36" />
<bpmndi:BPMNLabel>
<dc:Bounds x="1069" y="405" width="62" height="14" />
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn2:definitions>`;
