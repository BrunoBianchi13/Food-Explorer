import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint'

export const Container = styled.textarea`
    width:  36.4rem;
    height: 15.0rem;
    background: ${({theme})=> theme.COLORS.DARK_800};
    color: ${({theme})=> theme.COLORS.WHITE};
    border: none;
    resize: none;
    margin-top: .8rem;
    border-radius: 1.0rem;
    padding: 2.4rem;
    
    &::placeholder {
        color: ${({theme})=> theme.COLORS.GREY};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
        width: 112.0rem;
        height: 17.2rem;
    }
`