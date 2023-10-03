import { Typography, Box } from '@mui/material';
import BottomContent from '@site/components/BottomContent';

import { SelfImage, Cta } from '../components';

const MobileLayout = (): JSX.Element => {
  return (
    <Box
      sx={{
        margin: `0 auto`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        maxWidth: 320,
      }}>
      <Box sx={{ alignSelf: `center`, mt: 4, mb: 4 }}>
        <SelfImage />
      </Box>
      <Typography paragraph variant="h4">
        Hi, I’m Emmett
      </Typography>
      <Typography paragraph variant="body1">
        I am a software engineer living in the Boston area. I love building web
        apps, early stage product development, and am a huge Typescript nerd.
      </Typography>
      <Box sx={{ textAlign: `center`, margin: `0 auto`, mt: 1, mb: 4 }}>
        <Cta />
      </Box>
      <BottomContent />
    </Box>
  );
};

export default MobileLayout;
