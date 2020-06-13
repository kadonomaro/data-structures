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


const graph = new Graph();
const dots = [
    { x: 10, y: 450 },
    { x: 250, y: 20 },
    { x: 350, y: 620 },
    { x: 560, y: 210 },
    { x: 1200, y: 570 },
    { x: 800, y: 970 }
];

dots.forEach(dot => graph.addNode(dot));

for (let i = 0; i < graph.nodes.length; i++) {
    for (let j = 0; j < graph.nodes.length; j++) {
        if (i !== j) {
            graph.addLine(dots[i], dots[j]);
        }
    }
}


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

graph.nodes.forEach(node => {
    ctx.fillRect(node.value.x, node.value.y, 5, 5);

    node.lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(node.value.x, node.value.y);
        ctx.lineTo(line.value.x, line.value.y)
        ctx.stroke();
    });
});

