import React from "react"
import { Container, Row, Col } from "react-bootstrap"

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
              My name is Sleino.I design and build UI with HTML/CSS/JS. I'm
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
            <p>
              "Selino is an ultimate triple-threat web developer. He brings an
              amazing amount of UX and UI experience to the table along with the
              technical abilities to make them happen in HTML and Javascript.
              He's that all-in-one UI guy that is always needed and rarely
              found." Paul Clegg Senior Web Developer, Collabnet
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='copy-info-secondary'>
          <Col xs={12} sm={3} lg={2}>
            <h5>Designer + Coder</h5>
          </Col>
          <Col>
            I belive that building software interfaces is programming… and it's
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
            When it comes to building applications I tend to value information
            from stakeholders as much possible during the entire process, not at
            just the beginning phase.
            <ul>
              <li>Gather Requirements</li>
              <li>Draft a Design</li>
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
