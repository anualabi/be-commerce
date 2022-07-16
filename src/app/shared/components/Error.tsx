import Typography from '@mui/material/Typography';

type Props = { message: string };

export const Error = (props: Props) => {
  return (
    <Typography color="red" textAlign="center">
      {props.message}
    </Typography>
  );
};
