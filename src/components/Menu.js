import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import tnReduxCounter from "../images/tn-redux-counter.png"
import tnExecSummary from "../images/tn-exec-summary.png"
import tnWordCounter from "../images/tn-word-counter.png"
import tnGifCaller from "../images/tn-gifcaller.gif"
import styled from "@emotion/styled"

const Emotion = styled.div`
  .card {
    cursor: pointer;
    margin-bottom: 2rem !important;
    min-width: 200px;
    max-width: 300px;
    margin: 1rem;
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
  return (
    <Emotion>
      <div class='d-flex flex-wrap justify-content-center'>
        <LinkContainer exact to='/counter' active='false'>
          <Card className='card-override'>
            <Card.Img variant='top' src={tnReduxCounter} />
            <Card.Body>
              <Card.Title>Redux Counter Prototype</Card.Title>
              <Card.Text>
                It took a while to wrap my head around exactly how Redux works
                and why it's handy on larger projects. It was helpful to learn
                by implemting on a simple component. I've also integrated
                Firebase into the Redux actions.
              </Card.Text>
            </Card.Body>
          </Card>
        </LinkContainer>

        <LinkContainer exact to='/executivesummary' active='false'>
          <Card className='card-override'>
            <Card.Img variant='top' src={tnExecSummary} />
            <Card.Body>
              <Card.Title>Trilliant Executive Summary Refactor</Card.Title>
              <Card.Text>
                I thought I'd challenge myself by refactoring some of the
                Trilliant components from Angular into React. It wasn't without
                issues but it was fast. I literally spent two work days getting
                the functionality and the look into place.
              </Card.Text>
            </Card.Body>
          </Card>
        </LinkContainer>

        <LinkContainer exact to='/wordcounter' active='false'>
          <Card className='card-override'>
            <Card.Img variant='top' src={tnWordCounter} />
            <Card.Body>
              <Card.Title>Word Counter</Card.Title>
              <Card.Text>
                I was given a white board test and I didn't have the algorithm
                for this function committed to memory. It was the only question
                I was given during a React test. I have it memorized now!
              </Card.Text>
            </Card.Body>
          </Card>
        </LinkContainer>

        <LinkContainer exact to='/gifcaller' active='false'>
          <Card className='card-override'>
            <Card.Img variant='top' src={tnGifCaller} />
            <Card.Body>
              <Card.Title>Gif Caller</Card.Title>
              <Card.Text>Wanna hit an API for some GIFs</Card.Text>
            </Card.Body>
          </Card>
        </LinkContainer>
      </div>
    </Emotion>
  )
}
