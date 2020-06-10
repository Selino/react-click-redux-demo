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
            the non-letters. I don't enjoy Regex.
          </p>
          <code>
            const myCounter = (str) => &#123;
            <br />
            &nbsp; let regex = new RegExp(/\w/)
            <br />
            &nbsp; const aRaw = str.split(" ")
            <br />
            &nbsp; const clean = aRaw.filter((e) =>
            <br />
            &nbsp; e.match(regex))
            <br />
            &nbsp; setState(clean.length)
            <br />
            &#125;
          </code>
        </Col>
      </Row>
    </Container>
  )
}
