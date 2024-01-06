import UnionFind from "./UnionFind";

class Graph {
    vertices: number;
    edges: [number, number][];
  
    constructor(vertices: number, edges: [number, number][]) {
      this.vertices = vertices;
      this.edges = edges;
    }
    
    // Check if the graph has a cycle
    hasCycle(): boolean {
      const unionFind = new UnionFind();
      for (const [u, v] of this.edges) {
        const rootU = unionFind.find(u);
        const rootV = unionFind.find(v);
  
        if (rootU === rootV) {
          return true;
        }
        unionFind.union(rootU, rootV);
      }
      return false;
    }
}

export default Graph;