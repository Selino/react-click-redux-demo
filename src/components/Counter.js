import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Container, Row, Col, Card } from "react-bootstrap"

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const sendClick = type => {
    switch (type) {
      case "RESET":
        dispatch({ type: type })
        break
      case "INCREMENT":
        dispatch({ type: type })
        break
      case "DECREMENT":
        if (counter > 0) {
          dispatch({ type: type })
        }
        break
      default:
        dispatch({ type: type })
    }
  }
  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col xs={6}>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body>
              <Card.Title>Counter: {counter}</Card.Title>
              <ButtonGroup aria-label='controls'>
                <Button onClick={() => sendClick("DECREMENT")}>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Button onClick={() => sendClick("RESET")}>Reset</Button>
                <Button onClick={() => sendClick("INCREMENT")}>
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
