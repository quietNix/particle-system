import { Particle } from "./particle.js";

class Main {
    constructor() {
        this.drawing = false;
        this.pointerX = null;
        this.pointerY = null;
        this.initialise();
    }

    initialise() {
        this.setupCanvas();
        this.setupUserValues()
        this.resize();
        this.listenMouseEvents();
        this.listenTouchEvents();
    }

    setupUserValues(){
        this.edge = 140;
        // this.ctx.globalCompositeOperation = "lighter";
        this.color = "rgba(0, 244, 0, 1)";
        this.strokeColor ="black";
    }

    setupCanvas() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
    }

    resize() {
        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        })
    }

    listenMouseEvents() {
        window.addEventListener("mousedown", () => {
            this.drawing = true;
        })
        window.addEventListener("mouseup", () => {
            this.drawing = false;
        })
        window.addEventListener("mousemove", (event) => {
            if (!this.drawing) return;
            this.pointerX = event.x;
            this.pointerY = event.y;
            this.branchOut(this.pointerX, this.pointerY);
        })
    }

    listenTouchEvents() {
        window.addEventListener("touchstart", () => {
            this.drawing = true;
        })
        window.addEventListener("touchleave", () => {
            this.drawing = false;
        })
        window.addEventListener("touchmove", (event) => {
            if (!this.drawing) return;
            this.pointerX = event.touches[0].clientX;
            this.pointerY = event.touches[0].clientY;
            this.branchOut(this.pointerX, this.pointerY);
        })
    }

    branchOut(x, y) {
        for (let i = 0; i < 3; i++) {
            const particle = new Particle({ x, y, color:this.color, strokeColor:this.strokeColor, centerX: x, centerY: y, ctx: this.ctx, edge: this.edge });
            particle.update();
        }
    }
}

new Main();