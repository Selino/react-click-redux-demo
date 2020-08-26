import React, { useState, useEffect } from "react"
import { Row, Col, Card, Badge } from "react-bootstrap"
import { useSpring, a } from "react-spring"

function AnimatedCount({ count }) {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { tension: 300, friction: 10 },
  })

  useEffect(() => {
    toggle(!state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <a.div
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          })
          .interpolate((x) => `scale(${x})`),
      }}
    >
      {count}
    </a.div>
  )
}

export default function WordCounter() {
  const [count, setCount] = useState(0)
  const [words, setWords] = useState("")
  const [curseWords, setCurseWords] = useState({ fuck: 0, shit: 0, damn: 0 })

  useEffect(() => {
    const curseWordsList = ["fuck", "shit", "asshole"]
    const lookForIt = (arrWords) => {
      let objCurseCount = {}
      let regex = new RegExp(buildRegex(curseWordsList), "gi")
      const matchedCurses = arrWords.split(" ").filter((e) => e.match(regex))

      matchedCurses.forEach((word) => {
        const wordLower = word.toLowerCase().replace(/\W/, "")
        if (!objCurseCount[wordLower]) objCurseCount[wordLower] = 0
        objCurseCount[wordLower]++
      })
      return objCurseCount
    }

    const buildRegex = (curseWords) => {
      let regex = ""
      curseWords.forEach((word) => {
        regex += `${word}|`
      })
      return regex.slice(0, -1)
    }

    let regex = new RegExp(/\w/)
    const aRaw = words.split(" ")
    const clean = aRaw.filter((e) => e.match(regex))
    setCurseWords(lookForIt(words))
    setCount(clean.length)
  }, [words])

  const handleChange = (e) => {
    setWords(e.target.value)
  }

  return (
    <Row>
      <Col xs={12} sm={6}>
        <textarea
          data-testid='text-input'
          value={words}
          type='textarea'
          placeholder='Type text into this area.'
          onChange={(e) => handleChange(e)}
          style={{ width: "100%", minHeight: "200px", resize: "none" }}
        />
      </Col>
      <Col xs={12} sm={3}>
        <Card style={{ boxShadow: "1px 2px 4px #CCC" }}>
          <Card.Body>
            <Card.Title>Total Words</Card.Title>
            <div
              data-testid='word-count'
              style={{
                fontSize: "6rem",
                fontWeight: "bold",
                lineHeight: "5rem",
              }}
            >
              <AnimatedCount count={count} />
            </div>
          </Card.Body>
        </Card>
        <div style={{ marginTop: "1rem" }}>
          {Object.keys(curseWords).map(function (key) {
            return (
              <Badge
                variant='danger'
                key={key}
                style={{ marginRight: ".25rem" }}
              >
                {key}{" "}
                <Badge pill variant='light'>
                  {curseWords[key]}
                </Badge>
              </Badge>
            )
          })}
        </div>
      </Col>
    </Row>
  )
}
