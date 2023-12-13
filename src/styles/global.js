import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoint'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size:62.5%;

    @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
      
      main{
        width: 144rem;
        min-width: fit-content;
        
      }
  }
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.DARK};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }


  main{
    max-width:42.8rem ;
    margin-inline: auto;
    box-sizing: content-box;

  }

  body, input,button, textarea{
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  
  


  `