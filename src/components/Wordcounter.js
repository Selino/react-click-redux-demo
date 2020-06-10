import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function WordCounter() {
  const [state, setState] = useState(0)

  const myCounter = (str) => {
    let regex = new RegExp(/\w/)
    const aRaw = str.split(" ")
    const clean = aRaw.filter((e) => e.match(regex))
    setState(clean.length)
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <textarea
            style={{ width: "100%", minHeight: "200px", resize: "none" }}
            id='name'
            type='textarea'
            placeholder='Type text into this area.'
            onChange={(e) => myCounter(e.target.value)}
          />
          <div>{state}</div>
        </Col>
        <Col>
          <p>
            It took a while to figure out the method & regex combo to filter out
            the non-letters. I never really enjoyed Regex.
          </p>
          <code>
            const myCounter = (str) => &#123; <br />
            let regex = new RegExp(/\w/)
            <br />
            const aRaw = str.split(" ")
            <br />
            const clean = aRaw.filter((e) =>
            <br />
            e.match(regex))
            <br />
            setState(clean.length)
            <br />
            &#125;
          </code>
        </Col>
      </Row>
    </Container>
  )
}
