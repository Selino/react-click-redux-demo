/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import { Form, InputGroup, Button, Container, Spinner } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"

function useGiphy(query) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query}&limit=10&offset=0&rating=G&lang=en`
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
    query !== "" && query !== null ? fetchData() : setResults([])
  }, [query])
  return [results, loading]
}

export default function GifCaller() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [results, loading] = useGiphy(query)

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <Container>
      <Form id='myForm' onSubmit={handleSubmit}>
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
                transform: translate(-50%, -50%);
                color: ${colors.graysGray3};
                cursor: pointer;
                z-index: 5;
                font-size: ${fontSizes.h6};
                &:hover {
                  color: ${colors.graysGray2};
                }
              `}
              onClick={(e) => {
                setSearch("")
                setQuery("")
              }}
              icon={faTimesCircle}
              className={search ? "" : "d-none"}
            />

            <Button
              type='submit'
              css={css`
                background-color: ${colors.primaryInactive}
                border-color: none;
                &:hover {
                  background-color: ${colors.primaryHover};
                  border-color: ${colors.primarySelected};
                }
              `}
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      <div
        css={css`
          padding-top: 2rem;
          text-align: center;
        `}
      >
        {loading ? (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          results.map((item, index) => (
            <video key={index} autoPlay loop src={item} />
          ))
        )}
      </div>
    </Container>
  )
}
