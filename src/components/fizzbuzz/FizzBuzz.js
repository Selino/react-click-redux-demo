import React from "react"
import { useState, useEffect } from "react"
import {
  Form,
  Button,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap"
import { faCalculator } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Bounce } from "react-reveal"
import TransitionGroup from "react-transition-group/TransitionGroup"

const numbersArray = [
  { num: 15, word: "FIZZBUZZ!", variant: "danger" },
  { num: 5, word: "Buzz", variant: "success" },
  { num: 3, word: "Fizz", variant: "warning" },
  { num: null, word: null, variant: "secondary" },
]

const getString = (array, number) => {
  const result = array.find(({ num }) => number % num === 0)
  return result === undefined ? null : result.word
}

const setVariant = (array, match) => {
  const result = array.find(({ word }) => word === match)
  return result.variant
}

export const AlertItem = (props) => {
  return (
    <Alert title={props.displayStatus} variant={props.variant}>
      <Container>
        <Row>
          <Col
            className='display-status text-center text-md-left'
            xs={12}
            sm={6}
          >
            {props.displayStatus}
          </Col>
          <Col className='text-center text-md-right font-weight-bold h2 result-number'>
            {props.value}
          </Col>
        </Row>
      </Container>
    </Alert>
  )
}

export const DisplayAlerts = (props) => {
  const alertsToDisplay = props.items
    .map((i, index) => {
      console.log("test")
      return (
        <Bounce top key={index}>
          <AlertItem
            key={index}
            variant={setVariant(props.array, getString(props.array, i.num))}
            displayStatus={getString(props.array, i.num)}
            value={i.num}
          />
        </Bounce>
      )
    })
    .reverse()
  return <TransitionGroup>{alertsToDisplay}</TransitionGroup>
}

export default function FizzBuzz() {
  const [inputNumber, setInputNumber] = useState(1)
  const [displayArray, setDisplayArray] = useState([])
  const inputRef1 = React.createRef()

  const handleChange = (value) => {
    const regexp = new RegExp("^[0-9]+$")
    const cleanValue = value.match(regexp)

    if (cleanValue >= 1 && cleanValue <= 99 && cleanValue != null) {
      setInputNumber(parseInt(cleanValue))
    }
  }

  useEffect(() => {
    inputRef1.current.focus()
  }, [displayArray, inputRef1])

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              setDisplayArray([...displayArray, { num: inputNumber }])
            }}
          >
            <InputGroup className='mb-3'>
              <Form.Control
                data-testid='number-input'
                type='number'
                value={inputNumber}
                onChange={(e) => {
                  handleChange(e.target.value)
                }}
                ref={inputRef1}
              />
              <InputGroup.Append>
                <Button data-testid='submit-button' type='submit'>
                  <FontAwesomeIcon
                    alt='Calculate'
                    icon={faCalculator}
                  ></FontAwesomeIcon>
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <p>
              Enter a number between 1 & 99 to determine if it is a factor of
              (divides evenly into) 3 or 5. Get a "Fizz" if by 3, "Buzz" if by
              5, and "<strong>FIZZBUZZ</strong>" if both!
            </p>

            <p>
              This is a classic JS algorithm that I've been asked to write more
              than once during white boarding interviews. I have not remembered
              it yet.{" "}
              <span role='img' aria-label='grimmace'>
                😬
              </span>
            </p>
          </Form>
        </Col>
        <Col>
          <div
            data-testid='list-area'
            style={{
              border: "solid 1px #CCC",
              borderRadius: "4px",
              height: "50vmin",
              overflow: "auto",
              padding: "1rem",
            }}
          >
            <DisplayAlerts array={numbersArray} items={displayArray} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
