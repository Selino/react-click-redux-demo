import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card, Badge } from "react-bootstrap"
import getMenuData from "../../fixtures/MenuText"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"
import colors from "../../tokens/colors"

const Emotion = styled.div`
  .card {
    cursor: pointer;
    margin-bottom: 2rem !important;
    min-width: 200px;
    max-width: 340px;
    height: 87%;
  }

  .React-type {
    color: ${colors.white};
    background-color: ${colors.alertInfo};
  }

  .Figma-type {
    color: ${colors.white};
    background-color: ${colors.alertSuccess};
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (min-width: 250px) {
    .sub-text {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      min-width: 96%;
    }

    .flex-wrap > div {
      width: 100%;
    }
  }
`

function CardItem({ title, desc, img, video, link, type }) {
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
      <LinkContainer exact to={link} active='false' className={title}>
        <Card className='card-override'>
          {!video ? (
            <Card.Img variant='top' src={img} />
          ) : (
            <video
              playsInline='playsInline'
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
            {!type ? null : (
              <p style={{ marginTop: "1rem" }}>
                <Badge className={type + "-type"}>{type}</Badge>
              </p>
            )}
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
      <div className='d-flex flex-wrap justify-content-around align-items-stretch body-container'>
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
              type={a.type}
            />
          )
        })}
      </div>
    </Emotion>
  )
}
