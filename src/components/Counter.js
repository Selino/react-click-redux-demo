import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Container, Row, Col, Card } from "react-bootstrap"
import axios from "axios"

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col xs={6}>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body>
              <Card.Title>Counter: {counter}</Card.Title>
              <ButtonGroup aria-label='controls'>
                <Button onClick={() => dispatch({ type: "DECREMENT" })}>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Button onClick={() => dispatch({ type: "RESET" })}>
                  Reset
                </Button>
                <Button onClick={() => dispatch({ type: "INCREMENT" })}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>&nbsp;</Col>
      </Row>
    </Container>
  )
}

export default Counter
