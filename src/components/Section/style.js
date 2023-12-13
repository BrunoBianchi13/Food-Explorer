import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';

export const Container = styled.section`
  
  > .card{
    display:flex;
    flex-direction: row;
    gap: 1.6rem;
    margin-bottom: 2rem;
  }
  >h2 {
    

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    margin: 1rem 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    h2{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      margin-bottom: 1rem;
    }
  }

`
  