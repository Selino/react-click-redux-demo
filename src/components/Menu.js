import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import tnReduxCounter from "../images/tn-redux-counter.png"
import tnExecSummary from "../images/tn-exec-summary.png"
import "../css/menu.css"

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md='6'>
          <Card>
            <Card.Img variant='top' src={tnReduxCounter} />
            <Card.Body>
              <Card.Title>Redux Counter</Card.Title>
              <Card.Text>
                <p>
                  It took a while to wrap my head around exactly how Redux works
                  and why it's handy on larger projects. It was helpful to learn
                  by implemting on a simple component. I've also integrated
                  Firebase into the Redux actions.
                </p>
                Features
                <ul>
                  <li>Functional component using Redux Hooks for state </li>
                  <li>Serverless database using Firebase Realtime DB</li>
                  <li>
                    Authentication and persmissions using Firebase Auth Services
                  </li>
                  <li>React router usage with Firbase Auth</li>
                </ul>
              </Card.Text>
              <LinkContainer to='/counter'>
                <Button variant='primary'>Load Counter Demo</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' md='6'>
          <Card>
            <Card.Img variant='top' src={tnExecSummary} />
            <Card.Body>
              <Card.Title>Trilliant Executive Summary</Card.Title>
              <Card.Text>
                <p>
                  I thought I'd challenge myself by refactoring some of the
                  Trilliant components from Angular into React. It wasn't
                  without issues but it was fast. I literally spent two work
                  days getting the functionality and the look into place.
                </p>
                <p>
                  I'll be adding pagination, CSV Export, and asynchronous
                  loading as time permits.
                </p>
              </Card.Text>
              <LinkContainer to='/executivesummary'>
                <Button variant='primary'>Load Exec Summary Demo</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
