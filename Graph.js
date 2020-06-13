class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        this.nodes.push({
            value,
            lines: []
        });
    }

    findNode(value) {
        return this.nodes.find(node => node.value === value);
    }

    addLine(startValue, endValue) {
        const startNode = this.findNode(startValue);
        const endNode = this.findNode(endValue);

        if (!(startNode || endNode)) {
            throw new Error('Nodes not found');
        }
        startNode.lines.push(endNode);
    }
}