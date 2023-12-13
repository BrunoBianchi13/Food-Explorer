import styled from 'styled-components';


export const Container = styled.button`
  width:100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO};
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;


  height: 4.8rem;
  border: 0;
  padding:  0 2.4rem;
  
  border-radius:  1rem;
  font-weight: 500;

  > svg {
    margin-right: .8rem;
  }
`