import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;

  display: grid;
  grid-template-rows: 10rem auto; 
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  //renderização do menu com efeitos e transição
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? '1' : '0')};
  scale: ${({ $isMenuOpen }) => ($isMenuOpen ? '1' : '0.95')}; 
  visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? 'visible' : 'hidden')};
  
  transition: 
    transform .3s ease-in-out, 
    opacity .4s ease-out, 
    scale .1s ease-out, 
    visibility .3s ease-in-out;

  > header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 0 2.8rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > span {
      width: 100%;
      align-self: center;
      font-size: 2.4rem;
      text-align: center;
      font-family: ${({ theme }) => theme.FONTS.FONT_2};
    }

    > button, svg {
      align-self: center;
    }

    > svg:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      transform: scale(1.3);
      transition: all .3 ease-in-out;
    }
  }

  > main {
    width: calc(100% - 5.6rem);
    grid-area: content;
    justify-self: center;
    margin: 3.6rem 2.8rem 1.4rem;

    > div {
      margin-bottom: 3.6rem;

      input {
        max-width: 100%;
      }
    }

    button {
      width: 100%;
      font-weight: 400;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
`;
