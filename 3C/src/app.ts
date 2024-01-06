import Graph from "./Graph";

// Check if the cyclic graph has a cycle
const cycleEdges: [number, number][]  = [[0, 1], [0, 2], [2, 3], [0, 3], [0, 4]];
const cycleGraph = new Graph(5, cycleEdges);
console.log(`Graph has cycle: ${cycleGraph.hasCycle()}`);

// Check if the acyclic graph has a cycle
const acyclicEdges: [number, number][] = [[0, 2], [2, 1], [2, 3], [3, 4], [3, 5]];
const acyclicGraph = new Graph(6, acyclicEdges);
console.log(`Graph has cycle: ${acyclicGraph.hasCycle()}`);