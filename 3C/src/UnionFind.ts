class UnionFind {
    parent: Map<number, number>;
    constructor() {
      this.parent = new Map();
    }
  
    // Find the root of the set that x belongs to
    find(x: number): number {
      if (!this.parent.has(x)) {
        this.parent.set(x, x);
      }
  
      // If x is not the root of the set, recursively find the root
      if (this.parent.get(x) !== x) {
        this.parent.set(x, this.find(this.parent.get(x)!));
      }
      return this.parent.get(x)!;
    }
  
    // Merge the sets that x and y belong to
    union(x: number, y: number): void {
      const rootX = this.find(x);
      const rootY = this.find(y);
      
      if (rootX !== rootY) {
        this.parent.set(rootX, rootY);
      }
    }
}

export default UnionFind;