import { Box } from '@mui/material';

import Technologies from './Technologies';
import ExternalLinks from './ExternalLinks';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props): JSX.Element => {
  return (
    <Box
      className={className}
      sx={{
        padding: 1,
        display: 'flex',
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: 'primary.main',
      }}>
      <Technologies />
      <ExternalLinks />
    </Box>
  );
};

export default Footer;
