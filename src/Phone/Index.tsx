import './style.css'
import PhoneSVG from './1682317.svg'
import Picture from './2023-08-03 19.34.36.jpg'
import { createEffect, createSignal } from 'solid-js'
import Button from '../Button'

// =============================================================================
export default function Phone() {

  const [progress, setProgress] = createSignal(false)
  const width = window.innerWidth

  createEffect(() => {
    setInterval(() => {
      setProgress(true)
    }, 6000)
  })

  return (
    <div style={{
      "text-align": "center"
    }}>
      <h1>20th May 2023</h1>
      <Button progress={progress()} />
      <h1 style={{
        animation: "3s fadein"
      }}>
        The day that we first talked <br />
        I remember thinking to myself <br />
        "What an interesting girl"
      </h1>
      <div style={{
        width: "100%",
        position: "relative",
      }}>
        <PhoneSVG
          style={{
            position: "absolute",
            width: "800px",
            left: `${width / 2 - 400}px`,
            top: "-100px"
          }}
        />
        <img
          src={Picture}
          style={{
            position: "absolute",
            width: "430px",
            height: "800px",
            left: `${width / 2 - 213}px`,
            top: "100px",
            "object-fit": "cover",
            "object-position": "0 -90px",
            animation: "6s slidein"
          }}
        />
      </div>
    </div >
  )
}
