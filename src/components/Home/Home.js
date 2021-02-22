import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"
import getMenuData from "../../fixtures/MenuText"
import { useSpring, animated } from "react-spring"
import "./Home.scss"

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
          />
        )
      })}
    </div>
  )
}
