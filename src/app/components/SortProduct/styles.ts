import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledSortForm = styled(Box)(
  ({ theme }) => `
    display: none;

    form {
        display: flex;
        align-items: center;

        label {
            color: ${theme.palette.primary.dark};
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-weight: 500;
            margin-right: 0.5rem;

            svg {
                margin-right: 0.2rem;
            }
        }

        select {
            border: 0px;
            font-size: 1rem;
            font-weight: 600;
        }
        select:focus {
            box-shadow: none;
            outline: none;
        }   
    }

    ${theme.breakpoints.up('md')} {
        display: block;
    }
`
);
