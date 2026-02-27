import { getRandomColor, getRandomInt } from "./utils.js";
import { drawRectangle, drawArc, drawLine } from "./canvas-utils.js";

let canvas;
let ctx;

let paused = false;
let createRectangles = true;
let createArcs = false;
let createLines = false;

let frameCount = 0;
let drawDelay = 10;

// Init function
const init = () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    
    setupUI();
    update();
}

// Set up UI buttons, checkboxes, and canvas click and clear
const setupUI = () => {
    document.querySelector("#btn-play").onclick = function() {
        paused = false;
    };

    document.querySelector("#btn-pause").onclick = function() {
        paused = true;
    };

    document.querySelector("canvas").onclick = canvasClicked;

    document.querySelector("#cb-rectangles").onclick = function(e) {
        createRectangles = e.target.checked;
    }

    document.querySelector("#cb-arcs").onclick = function(e) {
        createArcs = e.target.checked;
    }

    document.querySelector("#cb-lines").onclick = function(e) {
        createLines = e.target.checked;
    }

    document.querySelector("#btn-clear").onclick = function() {
        ctx.clearRect(0, 0,canvas.width, canvas.height);
    }
}

// Animation loop
const update = () => {
    requestAnimationFrame(update);
    
    if (paused) return;

    frameCount++;

    if (frameCount % drawDelay !== 0) return;

    if (createRectangles) {
        drawRandomRect(ctx); 
    }

    if (createArcs){
        drawRandomArc();
    }

    if (createLines){
        drawRandomLine();
    }
}

const canvasClicked = (e) => {
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;

    for (let i = 0; i < 10; i++) {
        let randX = mouseX + Math.random() * 50 - 10;
        let randY = mouseY + Math.random() * 50 - 10;

        let randRad = Math.random() * 10;

        drawArc(ctx, randX, randY, randRad,"blue");
    }
}

const drawRandomRect = () => {
    // Get random coordinates and width and height
    let x = getRandomInt(0, canvas.width);
    let y = getRandomInt(0, canvas.height);
    let width = getRandomInt(20, 200);
    let height = getRandomInt(20, 200);
    let fillColor = getRandomColor();
    let lineWidth = getRandomInt(1, 10);
    let strokeStyle = getRandomColor();

    // Draw rectangle
    drawRectangle(ctx, x, y, width, height, fillColor, lineWidth, strokeStyle);
}

const drawRandomArc = () => {
    // Get random values for coordinates and radius
    let x = getRandomInt(0, canvas.width);
    let y = getRandomInt(0, canvas.height);
    let radius = getRandomInt(10, 100);

    // Get random values for fill and stroke
    let fillColor = getRandomColor();
    let lineWidth = getRandomInt(1, 10);
    let strokeStyle = getRandomColor();

    // Draw arc
    drawArc(ctx, x, y, radius, fillColor, lineWidth, strokeStyle);
}

const drawRandomLine = () => {
    // Get random values for coordinates
    let x1 = getRandomInt(0, canvas.width);
    let y1 = getRandomInt(0, canvas.height);
    let x2 = getRandomInt(0, canvas.width);
    let y2 = getRandomInt(0, canvas.height);

    // Get random values for stroke
    let lineWidth = getRandomInt(1, 10);
    let strokeStyle = getRandomColor();

    // Draw line
    drawLine(ctx, x1, y1, x2, y2, lineWidth, strokeStyle);
}

init();