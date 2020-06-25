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

function getString(item) {
  if (item % 15 === 0) return "FizzBuzz"
  else if (item % 3 === 0) return "Fizz"
  else if (item % 5 === 0) return "Buzz"
  else return null
}

export const AlertItem = (props) => {
  return (
    <Alert key={props.index} variant={props.variant}>
      <Container>
        <Row>
          <Col xs={6}>{props.displayStatus}</Col>
          <Col className='text-right font-weight-bold'>{props.value}</Col>
        </Row>
      </Container>
    </Alert>
  )
}

export const DisplayAlerts = (props) => {
  let strVariant = ""
  const result = props.items.map((i, index) => {
    const stringResult = getString(i.num)
    if (stringResult === "Fizz") strVariant = "warning"
    else if (stringResult === "Buzz") strVariant = "primary"
    else if (stringResult === "FizzBuzz") strVariant = "danger"
    else strVariant = "success"
    return (
      <AlertItem
        key={index}
        variant={strVariant}
        displayStatus={getString(i.num)}
        value={i.num}
      />
    )
  })
  return <div>{result}</div>
}

export default function FizzBuzz() {
  const [number, setNumber] = useState(5)
  const [displayArray, setDisplayArray] = useState([])
  const inputRef1 = React.createRef()

  const handleChange = (value) => {
    const regexp = new RegExp("^[0-9]+$")
    const cleanValue = value.match(regexp)

    if (cleanValue >= 1) {
      setNumber(parseInt(cleanValue))
    }
  }

  useEffect(() => {
    inputRef1.current.focus()
  }, [displayArray])

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              setDisplayArray([{ num: number }, ...displayArray])
            }}
          >
            <InputGroup className='mb-3'>
              <Form.Control
                type='number'
                value={number}
                onChange={(e) => {
                  handleChange(e.target.value)
                }}
                ref={inputRef1}
              />
              <InputGroup.Append>
                <Button type='submit'>Check Number</Button>
              </InputGroup.Append>
            </InputGroup>
            Nullam finibus diam elit, ut sodales augue euismod sed. Mauris
            sapien lorem, suscipit tempor dictum at, commodo ut libero. Ut felis
            ipsum, fringilla uis tortor nec, varius pellentesque nibh. Nulla
            lacinia massa vitae diam lobortis maximus. Curabitur id molestie
            dolor, mattis fermentum sapien.
          </Form>
        </Col>
        <Col>
          <DisplayAlerts items={displayArray} />
        </Col>
      </Row>
    </Container>
  )
}
