import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';


export const Container = styled.button`

border: 0; 


  >.had{
  width: 42.8rem;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0; 
  padding: 5.4rem 2.8rem 2.4rem 2.8rem;
  font-size: 2.5rem;
  

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
}



>.had  svg{
  width: 3.0rem;
  height: 3.0rem;
  cursor: pointer;

}

> .had .icon{
  display: none;
}

>.hadOpen{
  width: 42.8rem;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0; 
  padding: 5.4rem 2.8rem 2.4rem 2.8rem;
  display: flex;

  font-size: 2.1163rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

>.hadOpen  svg{
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.6rem;
}

> .hadOpen .icon-open{
  display: none;
}

>.menuOpen{
  background-color: ${({ theme }) => theme.COLORS.DARK};
  position: absolute;
  height: 132.0rem;
  z-index: 2;
  width: 42.8rem;
  animation: showSidebar .9s;
  padding: 3.6rem 2.8rem;
}

>.menuOpen #btn_sair{
  width: 100%;
  border: 0;
  background: transparent;
  border-bottom: .1rem solid var(--dark-dark-1000, #192227);
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  text-align: left;
  padding: 1.0rem;
  cursor: pointer;

.linkSS{
  text-decoration: none;
}
 
}
.had .title  {
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: end;
}

.had h4  {
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.had h5  {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.had  img {
  width: 2.4613rem;
  height: 2.4613rem;
}

>.menuClose{
  display: none;
}
>.had .titleOpen{
  display: none;
}

> .hadOpen .title{
  display: none;

}
> .hadOpen .order {
  display: none;
}

> .had .order{
  position: relative;
}

.desk{
  display: none;
}

.desk img{
  width: 3rem;
  height: 3rem;
}

.desk .cart-desk{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO};
  border: 0;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  gap: .8rem;
  height: 5.6rem;
}


.desk .cart-desk span{
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  width: 21.6rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; 
  
}

#header-ipt{
  display: flex;
  height: 4.8rem;
  padding: 1.2rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  border-radius: .5rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  border: 0;
  width: 100%;
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
  @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {

      .had{
        width: 144.0rem;
        margin-inline: 0 ;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2.4rem 12.3rem;
      }

      .desk{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3.2rem;

      }
      #header-ipt{
        width: 58.1rem;
        margin: 1.6rem 0;
        margin-left: 3.2rem;
      }

      .icon-open, .order, .title{
        display: none;
      }

      .had .title  {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: end;
      }
      
    }


    @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 42.8rem;
    }
  }

  @keyframes showSidebarC {
    from {
      opacity: 0;
      width: 42.8rem;
    }
    to {
      opacity: 1;
      width: 0;
    }
  }


`
