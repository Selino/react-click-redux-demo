import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import { useSpring, a } from "react-spring"
import colors from "../../tokens/colors"
import shadows from "../../tokens/shadows"

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
  const maxWordlength = 32

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
    const temp = e.target.value.split(" ")
    const status = temp.find((i) => i.length > maxWordlength)
    if (!status) {
      e.target.value.length <= 280 && setWords(e.target.value)
    }
  }

  return (
    <Container fluid className='body-container'>
      <Row>
        <Col sm={12} md={12} lg={3} style={{ marginBottom: "1rem" }}>
          <Card>
            <Card.Header>Summary</Card.Header>
            <Card.Body>
              <Card.Text>
                Demonstrates simple text manipulation on input using RegExp and
                "gutter talk". Hit auto fill if you're feeling lazy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={8} md={8} lg={6}>
          <textarea
            data-testid='text-input'
            value={words}
            type='textarea'
            placeholder={`Type into this area. Words can be ${maxWordlength} characters or less.`}
            onChange={(e) => handleChange(e)}
            style={{
              width: "100%",
              minHeight: "10rem",
              resize: "none",
              border: "none",
              outline: "none",
              backgroundColor: "#f6f7f6",
              padding: "1rem",
              borderRadius: ".25rem",
            }}
          />
          <Row style={{ marginBottom: "1rem" }}>
            <Col>
              <span style={{ color: "#666", fontSize: ".8rem" }}>
                {words.length}/280 max characters
              </span>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Button
                onClick={() =>
                  setWords(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus nulla, molestie a volutpat vel shit, sollicitudin nec enim. Cras facilisis nunc enim, quis tempor nulla fuckster scelerisque a."
                  )
                }
                variant='secondary'
                size='sm'
                alt='Fill text area with sample text'
                style={{ backgroundColor: colors.graysGray1 }}
              >
                Auto Fill
              </Button>
              &nbsp;
              <Button
                onClick={() => setWords("")}
                variant='warning'
                size='sm'
                disabled={!words}
                alt='Reset all text.'
                style={{ backgroundColor: colors.alertWarning }}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4} md={4} lg={3}>
          <Card style={{ boxShadow: shadows.deep }}>
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
            <h6>Total Curse Words: {Object.keys(curseWords).length}</h6>
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
    </Container>
  )
}
