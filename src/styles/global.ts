import { createGlobalStyle }from 'styled-components'
import Elipse1 from '../assets/elipseBlue1.png'
import Elipse2 from '../assets/elipseBlue2.png'

const globalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: url(${Elipse1}) no-repeat 1010px, url(${Elipse2}) no-repeat 931px;
    background-size: cover;
    background-color: #f8fdff;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`

export default globalStyle