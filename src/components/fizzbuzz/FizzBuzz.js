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

export const getString = (number) => {
  if (number % 15 === 0) return "FIZZBUZZ!"
  else if (number % 3 === 0) return "Fizz"
  else if (number % 5 === 0) return "Buzz"
  else return null
}

export const AlertItem = (props) => {
  return (
    <Bounce top>
      <Alert key={props.index} variant={props.variant}>
        <Container>
          <Row>
            <Col xs={6}>{props.displayStatus}</Col>
            <Col className='text-right font-weight-bold h2'>{props.value}</Col>
          </Row>
        </Container>
      </Alert>
    </Bounce>
  )
}

export const DisplayAlerts = (props) => {
  let strVariant = ""
  const result = props.items
    .map((i, index) => {
      const stringResult = getString(i.num)
      if (stringResult === "Fizz") strVariant = "warning"
      else if (stringResult === "Buzz") strVariant = "success"
      else if (stringResult === "FIZZBUZZ!") strVariant = "danger"
      else strVariant = "secondary"
      return (
        <AlertItem
          key={index}
          variant={strVariant}
          displayStatus={getString(i.num)}
          value={i.num}
        />
      )
    })
    .reverse()
  return <TransitionGroup>{result}</TransitionGroup>
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
              height: "32vmax",
              overflow: "auto",
              padding: "1rem",
            }}
          >
            <DisplayAlerts items={displayArray} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
