import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Row, Col, Card } from "react-bootstrap"
import tnReduxCounter from "../images/tn-redux-counter.png"
import tnExecSummary from "../images/tn-exec-summary.png"
import "../css/menu.css"

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md='6'>
          <LinkContainer exact to='/counter' active='false'>
            <Card className='card-override'>
              <Card.Img variant='top' src={tnReduxCounter} />
              <Card.Body>
                <Card.Title>Redux Counter Prototype</Card.Title>
                <Card.Text>
                  It took a while to wrap my head around exactly how Redux works
                  and why it's handy on larger projects. It was helpful to learn
                  by implemting on a simple component. I've also integrated
                  Firebase into the Redux actions.
                </Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col xs='12' md='6'>
          <LinkContainer exact to='/executivesummary' active='false'>
            <Card className='card-override'>
              <Card.Img variant='top' src={tnExecSummary} />
              <Card.Body>
                <Card.Title>Trilliant Executive Summary Refactor</Card.Title>
                <Card.Text>
                  I thought I'd challenge myself by refactoring some of the
                  Trilliant components from Angular into React. It wasn't
                  without issues but it was fast. I literally spent two work
                  days getting the functionality and the look into place. I'll
                  be adding pagination, CSV Export, and asynchronous loading as
                  time permits.
                </Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  )
}
