import React, { useEffect } from "react"
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
import { Bounce } from "react-reveal"

function Counter() {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const spinItem = (strButtonId) => {
    const element = document.getElementById(strButtonId)
    element.classList.add("fa-spin")
    setTimeout(() => element.classList.remove("fa-spin"), 500)
  }

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
                    counter > 0 && dispatch(decrementCount(1, counter))
                    spinItem("decrement-button")
                  }}
                >
                  <FontAwesomeIcon id='decrement-button' icon={faMinus} />
                </Button>
                <Button
                  data-testid='reset-button'
                  onClick={() => dispatch(resetCount())}
                >
                  <FontAwesomeIcon icon={faToiletPaper} />
                </Button>
                <Button
                  data-testid='increment-button'
                  onClick={(e) => {
                    counter <= 24 && dispatch(incrementCount(1, counter))
                    spinItem("increment-button")
                  }}
                >
                  <FontAwesomeIcon id='increment-button' icon={faPlus} />
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
