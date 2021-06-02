import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  button,
  input {
    font-family: -apple-system, Inter, Ubuntu, sans-serif;
  }

  *,
  li {
    list-style: none;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }
`
