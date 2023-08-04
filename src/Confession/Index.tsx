import TypeIt from "typeit"
import { createEffect } from "solid-js"
import Button from "../Button"

export default function Confession() {

  createEffect(() => {

    const typeDate = new TypeIt("#date", {
      speed: 20,
      cursor: false
    })
      .type("4th August 2023 <br />", { delay: 100 })

    const typeConfession = new TypeIt("#confession", {
      speed: 60,
      lifeLike: true,
      cursor: true
    })
      .pause(2000)
      .type("Dear wifey, ")
      .break({ delay: 100 })
      .break({ delay: 100 })
      .type("From that day on, I have known", { delay: 100 })
      .break({ delay: 100 })
      .type("That you are the one for me", { delay: 100 })
      .break({ delay: 100 })
      .type("So I guess what I am trying to say is…", { delay: 100 })
      .break({ delay: 100 })
      .break({ delay: 100 })
      .type("Will you marry me?", { delay: 200 })
      .pause(200)
      .delete(18, { delay: 100 })
      .type("Ooopss sorry, wrong script", { delay: 100 })
      .break({ delay: 100 })
      .type("That was suppose to be for later", { delay: 100 })
      .break({ delay: 100 })
      .type("Anyway, what I mean is", { delay: 100 })
      .break({ delay: 100 })
      .break({ delay: 100 })
      .break({ delay: 100 })
      .type("<b>Will you be my girlfriend?</b>", { delay: 100 })
      .pause(500)
      .break({ delay: 100 })
      .break({ delay: 100 })
      .break({ delay: 100 })
      .type("With lots of love, <br/> Your hubby,", { delay: 100 })
      .break({ delay: 100 })
      .type("<em>Huy</em>", { delay: 100 })

    typeDate.go()
    typeConfession.go()
  })


  return (
    <div style={{
      "text-align": "center"
    }}>
      <Button progress={true} />
      <div style={{
        margin: "100px auto",
        padding: "2rem",
        width: "70%",
        "max-width": "600px",
        height: "60vh",
        "min-height": "850px",
        border: "3px solid",
        "text-align": "left",
        "border-color": "lightgray black black lightgray",
        background: "white"
      }}>
        <h2 id="date"></h2>
        <h1 id="confession"></h1>
      </div>
    </div>
  )
}