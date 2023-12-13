import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';

export const Container = styled.div`
   display:flex;
   align-items: center;
   height: 3.2rem;
   width: auto;
   padding: 1.0rem 1.6rem;
   gap: .8rem;
   background-color: ${({ theme, isNew }) => isNew ? "transparent" : "gray"};
   color: ${({ theme }) => theme.COLORS.GREY};
   border: ${({ theme, isNew }) => isNew ? `.1rem dashed white` : "none"};
   border-radius: .8rem;
   
   > button{
      border:0;
      display: flex;
      background: transparent ;
      color: white;
      border: none;
      
   }

   > input{
      width: 10.0rem;
      background: transparent ;
      color: white;
      border: none;
   }

   &::placeholder{
      color: ${({ theme }) => theme.COLORS.WHITE};;
   }
   @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    > input{
      width: 13.0rem;
      background: transparent ;
      color: white;
      border: none;
   }
   }
`
  