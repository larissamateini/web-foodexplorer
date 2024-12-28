import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
display: flex;
align-items: center;

font-family: ${({ theme }) => theme.FONTS.FONT_2};
color: ${({ theme }) => theme.COLORS.LIGHT_300};
font-size: 2rem;
font-weight: 500;
line-height: 2rem;

margin-bottom: .8rem;
background: none;
border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3rem;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-weight: 600;
  }
`;
