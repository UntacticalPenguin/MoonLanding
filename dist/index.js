let world = 'world';
let canvas, context;
function init() {
    let canvas = document.getElementById('gameCanvas');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.strokeRect(50, 35, 50, 50);
    context.beginPath();
    context.strokeStyle = "red";
    context.bezierCurveTo(30, 40, 50, 150, 200, 80);
    context.stroke();
    context.closePath();
}
class Shuttle {
    constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 2) {
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }
    draw() {
    }
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=index.js.map