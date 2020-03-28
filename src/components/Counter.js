import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Container, Row, Col, Card } from "react-bootstrap"
import {
  startCount,
  incrementCount,
  decrementCount,
  resetCount
} from "../actions/CounterActions"

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const getStoredCount = () => {
    dispatch(startCount())
  }

  useEffect(() => {
    getStoredCount()
  }, [])

  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body>
              <Card.Title className='test'>Counter: {counter}</Card.Title>
              <Button
                onClick={() => {
                  counter > 0
                    ? dispatch(decrementCount(1, counter))
                    : dispatch({ type: "" })
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button onClick={() => dispatch(resetCount())}>Reset</Button>
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
