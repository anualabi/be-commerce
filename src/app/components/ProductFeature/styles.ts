import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledFeatureHero = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;

    .feature-image {
      margin: 1rem auto;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .image-text {
        background: ${theme.palette.primary.light};
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        position: absolute;
        bottom: 0px;
        left: 0px;
      }
    }

    .cart-btn {
      background-color: ${theme.palette.primary.main};
      border-radius: 0;
    }

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      flex-wrap: wrap;

      .feature-heading {
        order: 1;
      }

      .feature-image {
        order: 3;

        .image-text {
          font-size: 1.2rem;
        }
      }

      .cart-btn {
        order: 1;
      }
    }

  `
);

export const StyledFeatureContent = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;

    h2 {
      margin: 1rem 0;
    }

    h3 {
      display: none;
    }

    p {
      line-height: 1.6;

      @media (min-width: 768px) {
        line-height: 1.8;
      }
    }

    .recommendations {
      .recommended-images {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        width: 100%;
        max-width: 390px;

        img {
          width: 90px;
        }
      }

      p {
        color: gray;
      }
    }

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      justify-content: space-between;

      p {
        line-height: 1.8;
      }

      .about-feature {
        width: 49%;
      }

      .recommendations {
        text-align: right;
        width: 49%;

        .recommended-images {
          margin-left: auto;

          img {
            width: 110px;
          }
        }
      }
    }
  `
);
