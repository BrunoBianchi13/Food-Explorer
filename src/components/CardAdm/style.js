import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';

export const Container = styled.div`

  border-radius: .8rem;
  border: .1rem solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};
  cursor: pointer;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap: 1.5rem;
  width: 21.0rem;
  height: 29.2rem;
  position: relative;

img{
  width: 8.8rem;
  height: 8.8rem;
}

h1{

  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
}

h5{
  display: none;
}

span{
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  
}

.like svg{
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    
  border-radius: .8rem;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap: 1.5rem;
  width: 35.6rem;
  height: 46.2rem;
  position: relative;

img{
  width: 17.6rem;
  height: 17.6rem;
}

h1{
  text-align: center;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}

h5{
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; 
  display: block;
}

span{
  text-align: center;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  
}

.like svg{
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
}
}
  

`        