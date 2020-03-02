import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Container, Row, Col, Card } from "react-bootstrap"
import axios from "axios"

//action generators
const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
})

const decrementCount = (payload = {}) => ({
  type: "DECREMENT",
  decrementBy: typeof payload.decrementBy === "number" ? payload.decrementBy : 1
})

const resetCount = () => ({
  type: "RESET"
})

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const getStoredCount = () => {
    axios
      .get("http://localhost:5000/currentcount/5e4c34a342683f064e6ad948")
      .then(res => {
        // console.log(res.data.counter)
        dispatch({ type: "SET", data: res.data.counter })
        let n = document.getElementsByClassName("test")
        n[0].style.visibility = "visible"
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getStoredCount()
  }, [])

  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col xs={6}>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body>
              <Card.Title className='test'>Counter: {counter}</Card.Title>
              <ButtonGroup aria-label='controls'>
                <Button
                  onClick={() => {
                    counter > 0
                      ? dispatch(decrementCount())
                      : dispatch({ type: "" })
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Button onClick={() => dispatch(resetCount())}>Reset</Button>
                <Button onClick={() => dispatch(incrementCount())}>
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
