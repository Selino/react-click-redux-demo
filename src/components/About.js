import React from "react"
import { Container, Row, Col } from "react-bootstrap"

function About() {
  return (
    <div className='copy-info'>
      <Container>
        <Row className='copy-info-secondary'>
          <Col xs={12} sm={3} lg={2}>
            <h5>Designer & Coder</h5>
          </Col>
          <Col>
            Building software interfaces is programming… and it's UX… and it's
            design. At this point you can't be a frontend developer without
            knowing the fundamentals of typography, color theory, and user
            behavior as it pertains to software. The 21st century UI designer
            must understand how functional programming and optimized algorithms
            impact the crafting of user experiences in Javascript. The age of
            the zealot is long over. Development and design have merged. We are
            all "creative" & "pragmatic" now.
          </Col>
        </Row>
        <Row className='copy-info-secondary'>
          <Col xs={12} sm={3} lg={2}>
            <h5>Collaboration Style</h5>
          </Col>
          <Col>
            When it comes to building applications I tend to value information
            from stakeholders as much possible during the entire process.
            <ul>
              <li>Gather Requirements</li>
              <li>Draft a Design</li>
              <li>Gather Feedback</li>
              <li>Iterate</li>
              <li>Iterate</li>
              <li>Iterate</li>
              <li>Deliver</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col>
            <h3>
              Donec ac viverra felis. Quisque vel rutrum arcu, eget vestibulum
              mauris.
            </h3>
            <p>
              Tellus pellentesque eu tincidunt tortor. Massa eget egestas purus
              viverra accumsan in. Vel facilisis volutpat est velit egestas dui
              id ornare arcu. Orci nulla pellentesque dignissim enim sit amet
              venenatis urna cursus. Mauris commodo quis imperdiet massa
              tincidunt nunc pulvinar sapien et. Lectus proin nibh nisl
              condimentum id venenatis a condimentum vitae. Elit ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus. Maecenas
              accumsan lacus vel facilisis. Mi eget mauris pharetra et ultrices
              neque ornare aenean euismod. Lacus viverra vitae congue eu
              consequat ac felis. Nisi vitae suscipit tellus mauris a diam
              maecenas sed enim. Interdum posuere lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
