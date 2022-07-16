import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledFeatureHero = styled(Box, {})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 1rem auto;
  }

  button {
    background-color: black;
    border-radius: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    h1 {
      font-size: 1.25rem;
      order: 1;
    }

    img {
      order: 3;
    }

    button {
      background-color: black;
      order: 1;
    }
  }
`;

export const StyledFeatureContent = styled(Box, {})`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h3 {
    display: none;
  }

  p {
    line-height: 1.5;

    @media (min-width: 768px) {
      line-height: 1.8;
    }
  }

  .about-feature {
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
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
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
`;
