import React, { useState, useEffect } from "react"
import { Form, InputGroup, Button, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"

function useGiphy(query) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=Ms8MCTImiu6Ugn3ZzE3ppcgI0jH2kc8Q&q=${query}&limit=10&offset=0&rating=G&lang=en`
        )
        const json = await response.json()

        setResults(
          json.data.map((item) => {
            return item.images.preview.mp4
          })
        )
      } finally {
        setLoading(false)
      }
    }

    if (query !== "") {
      fetchData()
    }
  }, [query])

  return [results, loading]
}

export default function GifCaller() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [results, loading] = useGiphy(query)

  const clearResults = () => {
    setSearch("")
  }

  return (
    <Container>
      <Form
        id='myForm'
        onSubmit={(e) => {
          e.preventDefault()
          setQuery("")
        }}
      >
        <InputGroup className='mb-3'>
          <Form.Control
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for Gifs!'
          />
          <InputGroup.Append>
            <Button variant='outline-secondary' onClick={clearResults}>
              Clear
            </Button>
            <Button type='submit'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      <div style={{ textAlign: "center" }}>
        {loading ? (
          <FontAwesomeIcon
            icon={faCircleNotch}
            className='fa-spin'
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2rem",
            }}
          />
        ) : (
          results.map((item) => <video autoPlay loop key={item} src={item} />)
        )}
      </div>
    </Container>
  )
}
