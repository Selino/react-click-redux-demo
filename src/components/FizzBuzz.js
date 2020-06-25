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

function processNumberArray(array) {
  const processedArray = array.map((item) => {
    if (item % 15 === 0) return "FizzBuzz"
    else if (item % 3 === 0) return "Fizz"
    else if (item % 5 === 0) return "Buzz"
    else return item
  })
  return processedArray
}

export const AlertItem = (props) => {
  return (
    <Alert key={props.key} variant={props.variant}>
      {props.value}
    </Alert>
  )
}

export const DisplayAlerts = (props) => {
  let strVariant = ""
  const result = props.displayArray.map((i, index) => {
    if (i === "Fizz") strVariant = "warning"
    else if (i === "Buzz") strVariant = "primary"
    else if (i === "FizzBuzz") strVariant = "danger"
    else strVariant = "success"
    return <AlertItem key={index} variant={strVariant} value={i} />
  })
  return <div>{result}</div>
}

export default function FizzBuzz() {
  const [number, setNumber] = useState(5)
  const [numberArray, setNumberArray] = useState([])
  const [displayArray, setDisplayArray] = useState([""])
  const inputRef1 = React.createRef()

  const handleChange = (value) => {
    setNumber(value)
  }

  useEffect(() => {
    setDisplayArray(processNumberArray(numberArray))
    inputRef1.current.focus()
  }, [numberArray])

  return (
    <Container>
      <Row>
        <Col xs={4}>
          Nullam finibus diam elit, ut sodales augue euismod sed. Mauris sapien
          lorem, suscipit tempor dictum at, commodo ut libero. Ut felis ipsum,
          fringilla uis tortor nec, varius pellentesque nibh. Nulla lacinia
          massa vitae diam lobortis maximus. Curabitur id molestie dolor, mattis
          fermentum sapien. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed efficitur felis vitae
          suscipit faucibus.
        </Col>

        <Col xs={3}>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              setNumberArray([...numberArray, number])
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
          </Form>
        </Col>
        <Col xs={2}>
          <DisplayAlerts displayArray={displayArray} />
        </Col>
      </Row>
    </Container>
  )
}
