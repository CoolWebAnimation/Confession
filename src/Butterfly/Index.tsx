import Button from '../Button'
import './index.css'
import Stomach from './stomach-svgrepo-com.svg'

export default function Butterfly() {
  return (
    <div
      style={{
        position: 'relative',
        "text-align": "center"
      }}
    >
      <h1>26th June 2023</h1>
      <Button progress={true} />
      <h1>
        The day that we first met <br />
        When I hold your hand, do you know <br />
        what is happening inside my stomach?
      </h1>
      <div>
        <Stomach
          style={{
            position: "absolute",
            width: "600px",
            left: `${window.innerWidth / 2 - 300}px`,
            top: "220px",
          }}
        />
      </div>
      <div
        class="stage"
        style={{
          top: "400px",
          left: "300px"
        }}
      >
        <div class="mariposa">
          <div class="mariposa-turn">
            <div class="mariposa-flutter"></div>
          </div>
        </div>

        <div class="mariposa">
          <div class="mariposa-turn">
            <div class="mariposa-flutter"></div>
          </div>
        </div>

        <div class="mariposa">
          <div class="mariposa-turn">
            <div class="mariposa-flutter"></div>
          </div>
        </div>
      </div>
    </div>
  )
}