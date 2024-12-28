import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto 7.7rem; //11.4rem 7.7rem
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    //width: 100vw;
    grid-area: content;
    justify-self: center;

    > div {
      width: calc(100vw - 2.5rem);
      margin: 4rem 0rem 2.5rem;
      padding: 2rem;
    
      header {
        height: 11rem;
        margin: 0 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        
        border-radius: .5rem;
        background: linear-gradient(90deg, 
          ${({ theme }) => theme.COLORS.GRADIENTS_100} 0%, 
          ${({ theme }) => theme.COLORS.GRADIENTS_200} 100%
        );
        
        img {
          width: 19rem;
          position: absolute;
          left: -2rem;
          bottom: 0;
        }

        div {
          width: 20rem;
          position: absolute;
          top: 3rem;
          right: -6rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};

          h1 {
            font-family: ${({theme}) => theme.FONTS.FONT_2};
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 2rem;
            margin-bottom: .3rem;
          }

          p {
            font-size: 1.2rem;
            line-height: 1.6rem;
          }
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XS}) {
    main > div > header {
        div {
          right: -.6rem;
        }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    main {
      width: 97vw;
    }

    main > div > header {
        div {
          right: 5rem;
        }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      width: 100vw;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 1rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: .8rem;
      }

      > div {
        width: calc(100% - 24.6rem);
        margin: 17rem 12.3rem 4.8rem;

        header {
          height: 26rem;
          margin: .1rem;
          border-radius: .8rem;

          img {
            width: 65.6rem;
            left: -2rem;
            bottom: -1.4rem;
          }

          div {
            width: 42.2rem;
            top: 10rem;
            right: 10rem;

            h1 {
              font-weight: 500;
              font-size: 3.6rem;
              margin-bottom: .8rem;
              line-height: 3rem;
            }

            p {
              font-size: 1.6rem;
              line-height: 100%;
            }
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 4rem;

  section > h2 {
    font-family: ${({ theme }) => theme.FONTS.FONT_2};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 6rem;
    margin-top: 8rem;

    section > h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
`;


export const SwiperStyles = styled.div`
  .swiper {
    height: fit-content;
  }
  
  .swiper-slide {
    max-width: 21rem;
  }
  
  .swiper .swiper-button-next,
  .swiper .swiper-button-prev {
    color:  ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper {
      height: 46rem;
    }

    .swiper::before,
    .swiper::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 22.4rem;
      z-index: 2;
      pointer-events: none;
    }

    .swiper::before {
      left: 0;
      background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, transparent 100%);
    }

    .swiper::after {
      right: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) 100%);
    }

    .swiper-slide {
      max-width: 30.4rem;
    }
  }
`;
