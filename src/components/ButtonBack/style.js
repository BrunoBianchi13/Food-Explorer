import styled from 'styled-components';


export const Container = styled.button`
  border: 0;
  

  background: transparent;
  color: white;
  cursor: pointer;
  

  .back{

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

  }

  .back svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`