import { Typography, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

interface Props {
  payload?: Array<{
    value: string;
    color?: string;
  }>;
}

const Legend = ({ payload }: Props): JSX.Element | null => {
  if (!payload) {
    return null;
  }

  return (
    <Box sx={{ justifyContent: `center`, display: `flex`, gap: 2 }}>
      {payload.map((entry, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={`item-${index}`} sx={{ display: `flex`, gap: 1 }}>
            <CircleIcon
              style={{
                color: entry.color || `#000`,
              }}
            />
            <Typography component="div" variant="subtitle2">
              {entry.value}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Legend;
