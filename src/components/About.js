import React from "react"

export default function About() {
  return (
    <div className='body-container'>
      <h2>About</h2>
      <p>This demo is to display an understanding of several core concepts.</p>
      <ul>
        <li>Functional components using Redux Hooks for state</li>
        <li>Serverless database using Firebase Realtime DB</li>
        <li>Authentication and persmissions using Firebase Auth Services</li>
        <li>React router usage</li>
        <li>Deployment onto Heroku</li>
      </ul>
      <p>Click on the "Counter" link in the nav to continue.</p>
      <p>
        Source code at{" "}
        <a
          href='https://github.com/Selino/react-click-redux-demo'
          target='_blank'
          rel='noopener noreferrer'
        >
          github.com/Selino/react-click-redux-demo
        </a>
      </p>
    </div>
  )
}
