import React, { useState, useEffect } from "react"
import { Form, InputGroup, Button, Container, Spinner } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { css, jsx } from "@emotion/core" /** @jsx jsx */

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

  return (
    <Container>
      <Form
        id='myForm'
        onSubmit={(e) => {
          e.preventDefault()
          setQuery(search)
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
            <FontAwesomeIcon
              css={css`
                position: absolute;
                top: 50%;
                right: 3rem;
                color: #e5e5e5;
                cursor: pointer;
                z-index: 5;
                transform: translate(-50%, -50%);
                font-size: 1.3rem;
                &:hover {
                  color: #666;
                }
              `}
              onClick={() => setSearch("")}
              icon={faTimesCircle}
              className={search ? "" : "d-none"}
            />

            <Button type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      <div style={{ textAlign: "center", padding: "25%" }}>
        {loading ? (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          results.map((item) => <video autoPlay loop key={item} src={item} />)
        )}
      </div>
    </Container>
  )
}
