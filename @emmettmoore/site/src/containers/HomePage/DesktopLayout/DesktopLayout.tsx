import { Typography, Box } from '@mui/material';
import { SelfImage, Cta } from '../components';
import BottomContent from '@site/components/BottomContent';
const DesktopLayout = (): JSX.Element => {
  return (
    <Box sx={{ margin: `0 auto auto`, maxWidth: 750 }}>
      <Box
        sx={{
          mt: 8,
          mb: 8,
          display: `flex`,
          flexDirection: { xs: `column`, sm: `row` },
        }}>
        <Box sx={{ flex: 1, pr: 2, pl: 2, minWidth: `50%` }}>
          <Typography paragraph variant="h4">
            Hi, I’m Emmett
          </Typography>
          <Typography paragraph sx={{ mt: 4 }} variant="body1">
            I am a software engineer living in the Boston area. I love building
            web apps, early stage product development, and am a huge Typescript
            nerd.
          </Typography>
          <Typography paragraph variant="body1">
            Take a look at my work here:
          </Typography>
          <Box sx={{ textAlign: `center`, margin: `0 auto`, mt: 4 }}>
            <Cta />
          </Box>
        </Box>
        <Box>
          <SelfImage />
        </Box>
      </Box>
      <BottomContent />
    </Box>
  );
};

export default DesktopLayout;
