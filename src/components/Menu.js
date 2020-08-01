import React, { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import styled from "@emotion/styled"
import getMenuData from "../fixtures/MenuText"

const Emotion = styled.div`
  .card {
    cursor: pointer;
    margin-bottom: 2rem !important;
    min-width: 200px;
    max-width: 300px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }

  .card-override:hover {
    box-shadow: 0px 0px 4px#333;
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      min-width: 96%;
    }
  }
`

export default function About() {
  const [animation, setAnimation] = useState(0)
  const menuData = getMenuData().filter(
    (menuitem) =>
      menuitem.link !== "/" &&
      menuitem.link !== "/menu" &&
      menuitem.desc != null
  )
  return (
    <Emotion>
      <div className='d-flex flex-wrap justify-content-center'>
        {menuData.map((a) => {
          return (
            <LinkContainer key={a.id} exact to={a.link} active='false'>
              <Card className='card-override'>
                {!a.video ? (
                  <Card.Img
                    onLoad={() => setAnimation(animation + 1)}
                    variant='top'
                    src={a.img}
                  />
                ) : (
                  <video
                    autoPlay={true}
                    loop={true}
                    src={a.video}
                    className='card-img-top'
                    style={{
                      animationFillMode: "both",
                      animationDuration: "1000ms",
                      animationDelay: "0ms",
                    }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{a.title}</Card.Title>
                  <Card.Text>{a.desc}</Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          )
        })}
      </div>
    </Emotion>
  )
}
