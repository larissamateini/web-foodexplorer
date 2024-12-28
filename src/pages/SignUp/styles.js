import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 2.8rem;
    gap: 6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 4rem 1rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0 3rem;

  > img {
    width: 90%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    img {
      width: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    img {
      width: 75%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 90%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  > h2 {
    display: none;
  }

  > section input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: .8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.FONT_2};
    font-size: 1.4rem;
    text-align: center;
    line-height: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 3.8rem;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 4rem;
    border-radius: 2rem;
    
    > h2 {
      display: block;
      padding-bottom: 1rem;

      font-family: ${({ theme }) => theme.FONTS.FONT_2};
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    }

    
  }
`;
