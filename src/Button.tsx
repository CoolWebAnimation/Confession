import { createSignal } from "solid-js";
export const [counter, setCounter] = createSignal(0)

export default function Button(props: { progress: boolean }) {
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter() - 1)
        }}
        style={{
          display: props.progress && counter() > 0 ? 'inline' : 'none',
          "background-color": "aliceblue",
          "font-family": `"Nunito Sans", sans- serif`,
          width: "100px",
          height: "40px",
          "border-radius": "1rem",
          "margin-right": "1rem"
        }}
      >
        &lt; Previous
      </button>
      <button
        onClick={() => {
          setCounter(counter() + 1)
        }}
        style={{
          display: props.progress && counter() < 3 ? 'inline' : 'none',
          "background-color": "aliceblue",
          "font-family": `"Nunito Sans", sans- serif`,
          width: "100px",
          height: "40px",
          "border-radius": "1rem"
        }}
      >
        Next &gt;
      </button>
    </div>
  )
}