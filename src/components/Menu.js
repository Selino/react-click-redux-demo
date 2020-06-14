import React, { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import tnReduxCounter from "../images/tn-redux-counter.png"
import tnExecSummary from "../images/tn-exec-summary.png"
import tnWordCounter from "../images/tn-word-counter.png"
import tnGifCaller from "../images/tn-gifcaller.gif"
import styled from "@emotion/styled"
import { Fade } from "react-reveal"

const myData = [
  {
    id: "1",
    link: "/counter",
    title: "Redux Counter",
    desc:
      "It took a while to wrap my head around how Redux works and why it's handy on larger projects. It was helpful to learn by implemting on a simple component. I've also integrated Firebase serverless DB calls into the Redux actions.",
    img: tnReduxCounter,
  },
  {
    id: "2",
    link: "/executivesummary",
    title: "Trilliant Executive Summary",
    desc:
      "I thought I'd challenge myself by refactoring some of the Trilliant components from Angular into React. It wasn't without issues but it was fast. I literally spent one work day getting the functionality and the look into place.",
    img: tnExecSummary,
  },
  {
    id: "3",
    link: "/wordcounter",
    title: "Word Counter",
    desc:
      "I was given a white board test and I didn't have the algorithm for this function committed to memory. It was the only question I was given. I have it memorized now!",
    img: tnWordCounter,
  },
  {
    id: "4",
    link: "/gifcaller",
    title: "Gif Caller",
    desc: "Wanna hit an API for some GIFs?!",
    img: tnGifCaller,
  },
]

const Emotion = styled.div`
  .card {
    cursor: pointer;
    margin-bottom: 2rem !important;
    min-width: 200px;
    max-width: 300px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }

  .card-override:hover {
    box-shadow: 0px 0px 4px#333;
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
    }
  }
`

export default function About() {
  const [animation, setAnimation] = useState(0)
  return (
    <Emotion>
      <Fade when={animation === myData.length}>
        <div className='d-flex flex-wrap justify-content-center'>
          {myData.map((a) => (
            <LinkContainer key={a.id} exact to={a.link} active='false'>
              <Card className='card-override'>
                <Card.Img
                  onLoad={() => setAnimation(animation + 1)}
                  variant='top'
                  src={a.img}
                />
                <Card.Body>
                  <Card.Title>{a.title}</Card.Title>
                  <Card.Text>{a.desc}</Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          ))}
        </div>
      </Fade>
    </Emotion>
  )
}
