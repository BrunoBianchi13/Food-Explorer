import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    padding-top:15.8rem;
    padding-left: 6.8rem;
    padding-right: 4.7rem;

> .title{

    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 7.3rem;
    gap: 1rem;

}

.form_main h1{
    
    display: flex;
    justify-content: center;
    align-items: center ;
    height: 6.8762rem;
    display: none;
    margin-bottom: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

}
#btn_new{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    width:100%;
    border: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
    cursor: pointer;
    
}

@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30rem;

    .form_main{
        border-radius: 1.6rem;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 6.4rem;
        width: 54rem;
        gap:3.2rem;
    }

    


    .form_main h1{
        display: flex;

    }
}


`

export const Logo = styled.div`
    width: 4.33rem;
    height: 4.33rem;
    
    background: url(${logo}) no-repeat center center;
    background: cover;
    margin-right:1.5rem;
`
