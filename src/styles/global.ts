import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f3f3f3;
    /* background: ${(props) => props.theme.colors.background}; */
    font: 400 16px 'Poppins',Roboto, sans-serif;
    /* font: 400 16px Roboto, sans-serif; */
  }


`
