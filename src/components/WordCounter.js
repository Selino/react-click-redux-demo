import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"
import styled from "@emotion/styled"

export default function WordCounter() {
  const [state, setState] = useState(0)
  const [words, setWords] = useState("")

  useEffect(() => {
    let regex = new RegExp(/\w/)
    const aRaw = words.split(" ")
    const clean = aRaw.filter((e) => e.match(regex))
    setState(clean.length)
  }, [words])

  const Emotion = styled.div`
    textarea {
      width: 100%;
      min-height: 200px;
      resize: none;
    }
  `

  return (
    <Emotion>
      <Fade left>
        <Row>
          <Col xs={12} sm={6}>
            <textarea
              id='name'
              type='textarea'
              placeholder='Type text into this area.'
              onChange={(e) => setWords(e.target.value)}
            />
            <div>{state}</div>
          </Col>
          <Col>
            <p>
              It took a while to figure out the method & regex combo to filter
              out the non-letters. I don't enjoy Regex.
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
    </Emotion>
  )
}
