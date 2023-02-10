import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

interface ConfirmButtonProps {
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: center;

  div {
    align-items: center;
    text-align: center;
  }

  img {
    object-fit: contain;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    font-family: 'Londrina Solid', cursive;
    line-height: 42px;
    font-size: 42px;
    text-align: center;

    @media ${device.mobile} {
      font-size: 34px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 80%;
  justify-content: space-between;

  @media ${device.mobile} {
      width: 110%;
      justify-content: flex-end;
    }
`;

export const ConfirmButton = styled.button<ConfirmButtonProps>`
  font-size: 1rem;

  font-family: 'Work Sans', sans-serif;
  color: #fff;
  box-shadow: -4px 12px 25px -10px #2EAFB9;

  cursor: pointer;
  
  width: 145px;
  padding: 10px;
  
  border: none;
  border-radius: 100px;
  background-color: ${props => props.disabled ? '#C8C8C8' : '#2CC6D0'};

  @media ${device.mobile} {
    margin-left: 10px;
  }
`;

export const SkipButton = styled.button`
  font-size: 1.1rem;

  font-family: 'Work Sans', sans-serif;
  color: #2CC6D0;

  cursor: pointer;
  
  background-color: transparent;
  border: none;

`;
