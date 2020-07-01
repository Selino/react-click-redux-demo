import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"

export default function WordCounter() {
  const [count, setCount] = useState(0)
  const [words, setWords] = useState("")

  useEffect(() => {
    let regex = new RegExp(/\w/)
    const aRaw = words.split(" ")
    const clean = aRaw.filter((e) => e.match(regex))
    setCount(clean.length)
  }, [words])

  const handleChange = (e) => {
    setWords(e.target.value)
  }

  return (
    <Fade left>
      <Row>
        <Col xs={12} sm={6}>
          <textarea
            id='name'
            value={words}
            type='textarea'
            placeholder='Type text into this area.'
            onChange={(e) => handleChange(e)}
            style={{ width: "100%", minHeight: "200px", resize: "none" }}
          />
          <div>{count}</div>
        </Col>
        <Col>
          <p>
            It took a while to figure out the method & regex combo to filter out
            the non-letters. I don't enjoy Regex.
          </p>
          <code>
            useEffect(() => &#123;
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
            &#125;, [words])
          </code>
        </Col>
      </Row>
    </Fade>
  )
}
