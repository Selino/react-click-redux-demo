import React, { useState, useEffect } from "react"

const todos = {
  todos: [
    {
      id: 1,
      text: "Lorem ipsum",
    },
    {
      id: 2,
      text: "I love lamp",
    },
  ],
}

export default function Todos() {
  const [state, setState] = useState(todos)
  const [search, setSearch] = useState("")
  const inputRef1 = React.createRef()

  useEffect(async () => {
    try {
    } catch (error) {}
    console.log({ search })
  }, [search])

  const todosList = state.todos.map((item) => {
    return <li key={item.id}>{item.text}</li>
  })

  const saveTodo = (e) => {
    e.preventDefault()
    const value = inputRef1.current.value
    if (value !== "") {
      const id = state.todos.length + 1
      setState({
        todos: [...state.todos, { id: id, text: inputRef1.current.value }],
      })
      inputRef1.current.value = null
      inputRef1.current.focus()
    } else {
      console.log("no value")
    }
  }

  return (
    <form onSubmit={saveTodo}>
      <input name='one' type='text' ref={inputRef1} />
      <input
        name='two'
        type='text'
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type='submit' value='Submit' />
      {todosList}
    </form>
  )
}
