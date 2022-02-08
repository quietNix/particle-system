export class Particle {
    constructor({ x, y, color, strokeColor, centerX, centerY, ctx, edge }) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.strokeColor = strokeColor;
        this.speedX = 0;
        this.speedY = 0;
        this.centerX = centerX;
        this.centerY = centerY;
        this.ctx = ctx;
        this.edge = edge;
    }

    update() {
        this.speedX += (Math.random() - 0.5) / 1;
        this.speedY += (Math.random() - 0.5) / 1;
        this.x += this.speedX;
        this.y += this.speedY;

        const distanceX = this.x - this.centerX;
        const distanceY = this.y - this.centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const radius = (1 - distance / this.edge) * this.edge / 10;
        if (radius > 0) {
            requestAnimationFrame(this.update.bind(this));
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.color
            this.ctx.fill();
            this.ctx.strokeStyle = this.strokeColor;
            this.ctx.stroke();
        }
    }
}