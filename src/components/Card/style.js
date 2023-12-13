import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';

export const Container = styled.div`

  border-radius: .8rem;
  border: .1rem  solid ${({ theme }) => theme.COLORS.DARK_300};
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

  > .info-card{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
      
}

> .info-card .qtde-card span{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    margin-inline:1.4rem;

}

> .info-card h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom:1.2rem;
  
}

.info-card h5{
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  display: none;
    
  }


.cart{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  
}



> .info-card span{
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-bottom:1.2rem;
  
}


> .info-card input{


    border-radius: .8rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.DARK};
    background: ${({ theme }) => theme.COLORS.TOMATO};
    color: #E1E1E6;
    width: 18.0rem;
    padding: 1.2rem 2.4rem;
    
  
}

.info-card img{
    display: flex;
    width: 8.8rem;
    height: 8.8rem;
    margin-bottom: 1.5rem;
  }

> .info-card .like svg{
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    width: 2.4rem;
    height: 2.2rem;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {

  display: flex;
  min-width: 30.4rem;
  min-height: 46.2rem;
  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.4rem;
  border-radius: .8rem;
  border: .1rem solid ${({ theme }) => theme.COLORS.DARK};
  background: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  
  .info-card img{
    display: flex;
    width: 17.6rem;
    height: 17.6rem;
    margin-bottom: 1.5rem;
  }

  .info-card h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: center;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      margin-bottom:1.2rem;
    
  }

  .info-card h5{
      display: block;
    
  }

  .info-card span{
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    text-align: center;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    
  }


  .cart{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-inline: 1.2rem;
  
  }
  .cart svg{
    width: 2.4rem;
    height: 2.4rem; 
  }


  .cart .qtde-card span{
   
    font-size: 2.0rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  
  }

 

  > .info-card input{
      width: 9.2rem;
      
}

  

  
}

`        