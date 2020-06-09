import React, { useState } from "react"

export default function WordCounter() {
  const [state, setState] = useState(0)

  const myCounter = (str) => {
    let regex = new RegExp(/\w/)
    const aRaw = str.split(" ")
    const clean = aRaw.filter((e) => e.match(regex))
    setState(clean.length)
  }

  return (
    <>
      <textarea
        id='name'
        type='textarea'
        rows='10'
        cols='30'
        onChange={(e) => myCounter(e.target.value)}
      />
      <div>{state}</div>
    </>
  )
}
