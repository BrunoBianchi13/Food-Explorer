import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';


export const Container = styled.div`
  width: 42.8rem;
  height: 7.7rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0; 
  
  display: flex;
  align-items: center;
  justify-content: center;

>.fot{
  display: flex;
  justify-content: center;
  align-items: baseline;
  justify-content: space-between;
}

>.fot #logo{
  width: 3.0rem;
  height: 3.0rem;
  fill: ${({ theme }) => theme.COLORS.GREY};
  display: none;
}

> .fot h1{
  color: ${({ theme }) => theme.COLORS.GREY};
  font-size: 1.5262rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right:.8rem;
}

> .fot span{
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left:.8rem;
}

> svg {
  width: 2.8rem;
  height: 2.8rem;
}


@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
  width: 144.0rem;
  padding: 2.4rem 12.3rem ;
  

  >.fot{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }

  >.fot #logo{
    width: 3.0rem;
    height: 3.0rem;
    display: block;
}

  > .fot h1{
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:1.0rem;
}

> .fot span{
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
  


}

`
