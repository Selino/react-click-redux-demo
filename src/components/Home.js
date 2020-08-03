import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import styled from "@emotion/styled"
import getMenuData from "../fixtures/MenuText"
import { useSpring, animated } from "react-spring"

const Emotion = styled.div`
  .card {
    cursor: pointer;
    margin-bottom: 2rem !important;
    min-width: 200px;
    max-width: 300px;
    height: 87%;
    margin: 1rem;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
  }

  .card-override:hover {
    box-shadow: 0px 30px 50px -10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      min-width: 96%;
    }
  }
`

function CardItem({ title, desc, img, video, link }) {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.05,
  ]
  const trans = (x, y, s) => `scale(${s})`
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }))

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <LinkContainer exact to={link} active='false'>
        <Card className='card-override'>
          {!video ? (
            <Card.Img variant='top' src={img} />
          ) : (
            <video
              playsinline='playsinline'
              autoPlay={true}
              loop={true}
              src={video}
              variant='top'
              className='card-img-top'
              style={{
                animationFillMode: "both",
                animationDuration: "1000ms",
                animationDelay: "0ms",
              }}
            />
          )}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </animated.div>
  )
}

export default function About() {
  const menuData = getMenuData().filter(
    (menuitem) =>
      menuitem.link !== "/" &&
      menuitem.link !== "/home" &&
      menuitem.desc != null
  )
  return (
    <Emotion>
      <div className='d-flex flex-wrap justify-content-center'>
        {menuData.map((a) => {
          return (
            <CardItem
              title={a.title}
              desc={a.desc}
              img={a.img}
              video={a.video}
              id={a.id}
              link={a.link}
              key={a.id}
            />
          )
        })}
      </div>
    </Emotion>
  )
}
