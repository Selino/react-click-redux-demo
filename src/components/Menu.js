import React, { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import tnReduxCounter from "../images/tn-redux-counter.jpg"
import tnExecSummary from "../images/tn-trilliant-exec-summary.jpg"
import tnWordCounter from "../images/tn-word-counter.jpg"
import tnFizzBuzz from "../images/tn-fizz-buzz.jpg"
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
    id: "4",
    link: "/gifcaller",
    title: "Gif Caller",
    desc: "Wanna hit an API for some GIFs?!",
    img: null,
    video:
      "https://media2.giphy.com/media/Er3QVX48nt5ok/giphy-preview.mp4?cid=a9a0ef714a908254202b578f70a1faf7c19c9a517f3aa062&amp;rid=giphy-preview.mp4",
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
    id: "5",
    link: "/fizzbuzz",
    title: "FizzBuzz",
    desc: "A React implementation of a classic Javascript algorithm.",
    img: tnFizzBuzz,
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
      min-width: 96%;
    }
  }
`

export default function About() {
  const [animation, setAnimation] = useState(0)
  return (
    <Emotion>
      <Fade>
        <div className='d-flex flex-wrap justify-content-center'>
          {myData.map((a) => (
            <LinkContainer key={a.id} exact to={a.link} active='false'>
              <Card className='card-override'>
                {!a.video ? (
                  <Card.Img
                    onLoad={() => setAnimation(animation + 1)}
                    variant='top'
                    src={a.img}
                  />
                ) : (
                  <video
                    autoPlay={true}
                    loop={true}
                    src={a.video}
                    className='card-img-top'
                    style={{
                      animationFillMode: "both",
                      animationDuration: "1000ms",
                      animationDelay: "0ms",
                    }}
                  />
                )}
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
