import React from "react"
import { Container, Row, Col } from "react-bootstrap"

function About() {
  return (
    <div className='copy-info copy-info-secondary'>
      <Container>
        <Row>
          <Col xs={12} sm={4} md={3} lg={2} className='title'>
            Title
          </Col>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra aliquet viverra. Nulla eget nunc mattis, sagittis nunc at,
            accumsan eros. Morbi libero augue, euismod ac auctor vel, posuere
            nec libero. Pellentesque magna odio, condimentum ac ipsum a,
            ullamcorper tincidunt risus. Praesent cursus, lectus sed finibus
            tincidunt, lorem urna imperdiet orci, nec iaculis nibh purus in
            orci. Vestibulum sit amet sapien vel nunc efficitur lacinia. Proin
            sagittis efficitur quam at bibendum. Duis lobortis felis ut metus
            rutrum, sed aliquam neque cursus. Donec ac viverra felis. Quisque
            vel rutrum arcu, eget vestibulum mauris. Curabitur scelerisque
            posuere euismod. Fusce pulvinar mauris sed nunc lobortis luctus.
            Suspendisse tempor faucibus sem, id pulvinar ligula porta non. Proin
            sed elit eget ligula rutrum vulputate. Nullam nec pretium tortor,
            pellentesque efficitur turpis. Praesent vel augue augue.
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={3} lg={2} className='title'>
            Title
          </Col>
          <Col>
            Donec ac viverra felis. Quisque vel rutrum arcu, eget vestibulum
            mauris. Curabitur scelerisque posuere euismod. Fusce pulvinar mauris
            sed nunc lobortis luctus. Suspendisse tempor faucibus sem, id
            pulvinar ligula porta non. Proin sed elit eget ligula rutrum
            vulputate. Nullam nec pretium tortor, pellentesque efficitur turpis.
            Praesent vel augue augue.
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
