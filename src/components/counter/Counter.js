import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  faPlus,
  faMinus,
  faToiletPaper,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Row, Col, Card } from "react-bootstrap"
import {
  startCount,
  incrementCount,
  decrementCount,
  resetCount,
} from "../../actions/counter_actions"
import { useSpring, a } from "react-spring"

function AnimatedButton({ icon, onClick, testId }) {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { tension: 300, friction: 10 },
  })

  return (
    <a.div
      style={{
        display: "inline-block",
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          })
          .interpolate((x) => `scale(${x})`),
      }}
    >
      <Button
        data-testid={testId}
        onClick={() => {
          onClick()
          toggle(!state)
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
    </a.div>
  )
}

function Counter() {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const getStoredCount = async function () {
    try {
      dispatch(startCount())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStoredCount()
  })

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={7} md={5} style={{ marginBottom: "1rem" }}>
          <Card className='main-counter'>
            <Card.Body>
              <Card.Title className='counter-line'>
                Redux Counter: {counter}
              </Card.Title>

              <AnimatedButton
                testId='decrement-button'
                icon={faMinus}
                onClick={() => {
                  counter > 0 && dispatch(decrementCount(1, counter))
                }}
              />

              <AnimatedButton
                testId='reset-button'
                icon={faToiletPaper}
                onClick={() => {
                  counter > 0 && dispatch(resetCount())
                }}
              />

              <AnimatedButton
                testId='increment-button'
                icon={faPlus}
                onClick={() => {
                  counter <= 24 && dispatch(incrementCount(1, counter))
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={5} md={7}>
          <Card>
            <Card.Header>Summary</Card.Header>
            <Card.Body>
              <Card.Text>
                Count between 0 - 25. Data is persistent across sessions. Enjoy!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Counter
