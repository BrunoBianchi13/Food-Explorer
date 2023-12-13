import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900} ;
  color: ${({ theme }) => theme.COLORS.WHITE_500};
  border-radius: 1rem;
  margin: 1.6rem 0;
  margin-top: .8rem;

  > input {
    width:100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_800} ;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    border-radius: .8rem;
    border: 0;
    font-size: 1.5rem;
    
  }

  > svg {
    margin-inline: 1.6rem;
  }
`
