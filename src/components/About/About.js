import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Standing from "../../images/IMG_1308.svg"

function About() {
  return (
    <div className='copy-info'>
      <Container style={{ marginBottom: "2rem" }}>
        <Row>
          <Col>
            <h3>
              <span
                role='img'
                aria-label='Wave hello'
                style={{ marginRight: "1rem" }}
              >
                👋🏽
              </span>
              Hello!
            </h3>
            <p>
              My name is Selino.I design and build UI with HTML/CSS/JS. I'm
              mostly self taught, bootcamp taught, and team member taught. I
              have spent the last decade in vanilla JS, frameworks like Angular
              , and libraries like React. Much of that time has been in software
              like Sketch and Invision putting together UX architecture and
              crafting micro interactions to make users go.
            </p>

            <p>
              <b>I DO NOT have a CS focus</b> and have not spent a lot of time
              contemplating the Gang of Four design patterns in C++ or white
              boarding algorithms to traverse linked lists with O(log n) time
              complexity. I mean we can talk about it but that's not my jam.
            </p>

            <p>
              My jam is keeping up with UX patterns that are succeeding in
              enterprise and consumer interfaces, prototyping UI, and then
              building responsive and elegant UI components that scale to
              millions of users within 2-3 week agile release cycles. Give me an
              endpoint and I can give you the world!
            </p>
            <Container>
              <Row className='align-items-end'>
                <Col>
                  <img src={Standing} alt='Selino standing' width={"100%"} />
                </Col>
                <Col xs={12} sm={8} md={10}>
                  <p className='copy-quote'>
                    "Selino is an ultimate triple-threat web developer. He
                    brings an amazing amount of UX and UI experience to the
                    table along with the technical abilities to make them happen
                    in HTML and Javascript. He's that all-in-one UI guy that is
                    always needed and rarely found."
                  </p>
                  <p className='copy-quote-src'>
                    Paul Clegg <br />
                    Senior Web Developer, Collabnet
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='copy-info-secondary'>
          <Col xs={12} sm={3} lg={2}>
            <h5>Designer + Coder</h5>
          </Col>
          <Col>
            I believe that building software interfaces is programming… and it's
            UX… and it's design. At this point I couldn't do frontend
            development without knowing the fundamentals of typography, color
            theory, and user behavior as it pertains to software. As a 21st
            century UI designer I must understand how functional programming and
            optimized algorithms impact the crafting of user experiences in
            Javascript. The age of the zealot is over. Development and design
            have merged. We are all "creative" & "pragmatic" now and I feel like
            that's a good thing.
          </Col>
        </Row>
        <Row className='copy-info-secondary'>
          <Col xs={12} sm={3} lg={2}>
            <h5>Collaboration Style</h5>
          </Col>
          <Col>
            Building applications with solid teams has provided the most
            satisfying experiences of my professional life. Awards and kudos are
            great but it's the time spent with teammates that has made me a
            better creator. That said, there's difenitely a pattern to how I
            generally approach collaborating on a project. I tend to value
            information from stakeholders as much possible during the entire
            process, not at just the beginning phase. A typical rapid
            design/build cycle may look like this…
            <ul>
              <li>Gather Requirements</li>
              <li>Draft a UI/UX Design/Coded Prototype</li>
              <li>Gather Feedback</li>
              <li>Iterate</li>
              <li>Gather Feedback</li>
              <li>Iterate</li>
              <li>Deliver</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
