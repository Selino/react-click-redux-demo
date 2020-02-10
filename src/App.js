import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "react-bootstrap/Button"
import { ButtonGroup, Container, Row, Col, Card, Navbar } from "react-bootstrap"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Slektor</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>&nbsp;</Col>
          <Col xs={6}>
            <Card style={{ marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>Counter: {counter}</Card.Title>
                <Card.Text>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>&nbsp;</Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
