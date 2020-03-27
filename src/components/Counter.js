import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Container, Row, Col, Card } from "react-bootstrap"
import * as firebase from "firebase"

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyCL_Lo3hHzl4soj8Gb2MQ6Lsy1M5h-E6lk",
  authDomain: "react-click-redux-demo.firebaseapp.com",
  databaseURL: "https://react-click-redux-demo.firebaseio.com",
  projectId: "react-click-redux-demo",
  storageBucket: "react-click-redux-demo.appspot.com",
  messagingSenderId: "931347627875",
  appId: "1:931347627875:web:e5c45c8dcb825939b7dd56"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
// firebase end

// action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
})

const setCount = ({ counter }) => ({
  type: "SET",
  counter
})

const resetCount = () => ({
  type: "RESET"
})
// action generators end

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const getStoredCount = () => {
    database
      .ref()
      .once("value")
      .then(snapshot => {
        const data = snapshot.val()
        console.log(data)
        dispatch(setCount({ counter: data.counter }))
        let n = document.getElementsByClassName("test")
        n[0].style.visibility = "visible"
      })
      .catch(e => {
        console.log(`There was a problem: ${e}`)
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
