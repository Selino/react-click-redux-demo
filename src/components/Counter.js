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
} from "../actions/counter_actions"

function Counter() {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const getStoredCount = () => {
    dispatch(startCount())
  }

  useEffect(() => {
    getStoredCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className='main-counter'>
            <Card.Body>
              <Card.Title className='counter-line'>
                Counter: {counter}
              </Card.Title>
              <Button
                onClick={() => {
                  counter > 0
                    ? dispatch(decrementCount(1, counter))
                    : dispatch({ type: "" })
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button onClick={() => dispatch(resetCount())}>
                <FontAwesomeIcon icon={faToiletPaper} />
              </Button>
              <Button
                onClick={() => {
                  counter <= 24
                    ? dispatch(incrementCount(1, counter))
                    : dispatch({ type: "" })
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
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
  )
}

export default Counter
