import * as Solid from "solid-js";
import { animate, Firework } from './utils.js';
import Button from "../Button";

// =============================================================================
const colors = [
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 0, b: 255 },
  { r: 255, g: 255, b: 255 },
  { r: 138, g: 43, b: 226 },
  { r: 210, g: 105, b: 30 },
  { r: 100, g: 149, b: 237 },
];

// =============================================================================
export default function FireworkIndex() {

  const [canvas, setCanvas] = Solid.createSignal<HTMLCanvasElement>()
  const [ctx, setCtx] = Solid.createSignal<CanvasRenderingContext2D>()
  const [fireworks, setFireworks] = Solid.createSignal([])
  const [progress, setProgress] = Solid.createSignal(false)

  Solid.onMount(() => {
    let canvas = document.getElementById("firework") as HTMLCanvasElement;
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight / 1.5 * window.devicePixelRatio;
    canvas.style.width = `90%`;
    canvas.style.height = `${window.innerHeight / 1.5}px`;

    let ctx = canvas.getContext("2d");
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    setCanvas(canvas)
    setCtx(ctx)
    setInterval(() => setProgress(true), 6000)
  })

  setInterval(() => {
    setFireworks([])
    for (let i = 0; i < 10; i++) {
      let x = Math.random() * canvas().width / window.devicePixelRatio;
      // let y = Math.random() * canvas().height / window.devicePixelRatio;
      let y = Math.random() * canvas().height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      setFireworks(() => [...fireworks(), new Firework(x, y, color, canvas(), ctx())]);
    }

    animate(canvas(), ctx(), fireworks());
  }, 5000);


  return (
    <div style={{
      "margin-top": "40px",
      "text-align": "center",
    }}>
      <h1>
        And then we share our first kiss <br />
        My whole brain just goes
      </h1>
      <Button progress={progress()} />
      <canvas id="firework" style={{
        margin: "60px auto",
        padding: 0,
        display: "block",
        background: "black",
        "border-radius": "5rem",
        border: "10px solid mistyrose",
      }}></canvas>
    </div>
  )
}

const timestamp = () => new Date().getTime()