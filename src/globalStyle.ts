import { createGlobalStyle } from 'styled-components'
import { colorTheme } from './theme'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body, html, input, select, button {
  font-family: 'Poppins', 'sans-serif', 'Sora';
}

body {
background: ${colorTheme.white};
  
}
`
