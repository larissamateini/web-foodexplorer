import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .6rem;
  
  > input {
    width: 100%;
    height: 5rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.3rem;
    background: transparent;
    padding: 2rem 1rem;
    border: .8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      input {
        font-size: 1.5rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      input {
        font-size: 1.6rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      min-width: 20rem;
    }
`;