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
import Bounce from "react-reveal/Bounce"
import HeadShake from "react-reveal/HeadShake"

function Counter() {
  const counter = useSelector((state) => state.counter.count)
  const [animateButton, setAnimateButton] = useState("")
  const dispatch = useDispatch()

  const getStoredCount = async function () {
    try {
      dispatch(startCount())
    } catch (error) {
      console.log(error)
    }
  }

  const animateButtonCycle = (strButtonName) => {
    setAnimateButton(strButtonName)
    setTimeout(() => setAnimateButton("off"), 300)
  }

  useEffect(() => {
    getStoredCount()
  })

  return (
    <Bounce>
      <Container>
        <Row>
          <Col>&nbsp;</Col>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className='main-counter'>
              <Card.Body>
                <Card.Title className='counter-line'>
                  Redux Counter: {counter}
                </Card.Title>
                <Button
                  data-testid='decrement-button'
                  onClick={() => {
                    if (counter > 0) {
                      dispatch(decrementCount(1, counter))
                      animateButtonCycle("decrement")
                    }
                  }}
                >
                  <HeadShake when={animateButton === "decrement"}>
                    <FontAwesomeIcon icon={faMinus} />
                  </HeadShake>
                </Button>
                <Button
                  data-testid='reset-button'
                  onClick={() => {
                    if (counter > 0) {
                      dispatch(resetCount())
                      animateButtonCycle("reset")
                    }
                  }}
                >
                  <HeadShake when={animateButton === "reset"}>
                    <FontAwesomeIcon icon={faToiletPaper} />
                  </HeadShake>
                </Button>
                <Button
                  data-testid='increment-button'
                  onClick={(e) => {
                    if (counter <= 24) {
                      dispatch(incrementCount(1, counter))
                      animateButtonCycle("increment")
                    }
                  }}
                >
                  <HeadShake when={animateButton === "increment"}>
                    <FontAwesomeIcon icon={faPlus} />
                  </HeadShake>
                </Button>
              </Card.Body>
            </Card>
            <p style={{ marginTop: "1rem" }}>
              Count between 0 - 25.
              <br />
              Data is persistent across sessions. Enjoy!
            </p>
          </Col>
          <Col>&nbsp;</Col>
        </Row>
      </Container>
    </Bounce>
  )
}

export default Counter
