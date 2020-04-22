import React from "react"

export default function About() {
  return (
    <div className='body-container'>
      <h2>About</h2>
      <p>This demo is to display an understanding of several core concepts.</p>
      <ul>
        <li>Functional components using Redux for state</li>
        <li>Redux Dev Tools integration</li>
        <li>
          Persistent data across sessions using Firebase Realtime DB/Redux-Thunk
        </li>
        <li>React router usage</li>
        <li>Deployment using Heroku CLI</li>
      </ul>
      <p>Click on the "Counter" link in the nav to continue.</p>
    </div>
  )
}
