import React from "react"
import { useState, useEffect } from "react"
import { Form, Button, InputGroup, Container } from "react-bootstrap"

function processNumberArray(array) {
  const processedArray = array.map((item) => {
    if (item % 15 === 0) return "FizzBuzz"
    else if (item % 3 === 0) return "Fizz"
    else if (item % 5 === 0) return "Buzz"
    else return item
  })
  return processedArray
}

export default function FizzBuzz() {
  const [number, setNumber] = useState(2)
  const [numberArray, setNumberArray] = useState([])
  const [displayArray, setDisplayArray] = useState([""])

  useEffect(() => {
    console.log(numberArray)
    setDisplayArray(processNumberArray(numberArray))
  }, [numberArray])

  return (
    <Container>
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
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button type='submit'>Submit</Button>
        </InputGroup>
      </Form>
      <div>{displayArray}</div>
    </Container>
  )
}
