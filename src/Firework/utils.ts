
export class Firework {
  x: any;
  y: any;
  color: any;
  counter: number;
  sparks: any[];
  trail: any[];
  ctx: any;
  canvas: any;

  constructor(x, y, color, canvas, ctx) {
      this.x = x;
      this.y = y;
      this.counter = 0;
      this.color = color;
      this.sparks = [];
      this.trail = [];
      this.canvas = canvas;
      this.ctx = ctx;
  }

  draw() {
      this.counter++;

      // Draw the rocket
      if (this.counter < 80) {
          this.ctx.beginPath();
          this.ctx.arc(this.x, this.y, 0, 0, 2);
          this.ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
          this.ctx.fill();

          this.trail.push({x: this.x, y: this.canvas.height/window.devicePixelRatio - this.counter * 9 + this.y});

          // Draw the trail
          this.ctx.beginPath();
          this.ctx.moveTo(this.trail[0].x, this.trail[0].y);
          for (let i = 1; i < this.trail.length; i++) {
              this.ctx.lineTo(this.trail[i].x, this.trail[i].y);
              this.ctx.strokeStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
              this.ctx.lineWidth = 2.5;
              this.ctx.stroke();
          }

          // Remove older parts of the trail
          if (this.trail.length > 5) {
              this.trail.shift();
          }
      }

      // Explode the firework
      else if (this.sparks.length === 0) {
          for (let i = 0; i < 70; i++) { // increase the number of sparks
              this.sparks.push(new Spark(this.x, this.y, this.color, this.ctx));
          }
      }

      // Draw the explosion
      else {
          for (let i = 0; i < this.sparks.length; i++) {
              let spark = this.sparks[i];
              spark.draw();
              spark.update();
              if (spark.opacity <= 0) {
                  this.sparks.splice(i, 1);
                  i--;
              }
          }
      }
  }
}


class Spark {
  x: any;
  y: any;
  speed: number;
  angle: number;
  color: any;
  opacity: number;
  lightRadius: number;
  lightOpacity: number;
  ctx: any;

  constructor(x, y, color, ctx) {
      this.x = x;
      this.y = y;
      this.speed = Math.random() * 5 + 1;
      this.angle = Math.random() * Math.PI * 2;
      this.color = color;
      this.opacity = 1;
      this.lightRadius = 1;
      this.lightOpacity = 1;
      this.ctx = ctx
  }

  draw() {
      // Draw the light effect
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.lightRadius, 0.03, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      this.ctx.fill();
      this.lightRadius += 0.09; 
      this.lightOpacity *= 2; 

      // Update the opacity for flickering effect
      this.opacity = this.opacity <= 0.8 ? Math.random() * 0.8 : this.opacity - 0.5;

      this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      this.ctx.fillRect(this.x, this.y, 0.2, 0.2); 
  }

  update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.opacity -= 0.008; 
  }
}

export function animate(canvas, ctx, fireworks) {
    ctx.clearRect(0, 0, canvas.width/window.devicePixelRatio, canvas.height/window.devicePixelRatio);
    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].draw();
    }
    requestAnimationFrame(() => animate(canvas, ctx, fireworks));
}