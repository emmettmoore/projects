import { Box, Typography } from '@mui/material';

const BottomContent = (): JSX.Element => {
  return (
    <>
      <Box sx={{ pt: 1, borderTop: `2px solid #00000050`, textAlign: `right` }}>
        <Typography variant="body2">
          The source for this site lives in my{` `}
          <a
            href="https://www.github.com/emmettmoore/projects"
            rel="noreferrer"
            target="_blank">
            personal project monorepo.
          </a>
          {` `}
          Check it out
          {` `}
          <a
            href="https://www.github.com/emmettmoore/projects/@emmettmoore/site"
            rel="noreferrer"
            target="_blank">
            here
          </a>
          .
        </Typography>
        <Typography variant="body2">
          Check out an older version {` `}
          <a
            href="https://web.archive.org/web/20211130202131/http://www.emmettwmoore.com/"
            rel="noreferrer"
            target="_blank">
            here
          </a>
          .
        </Typography>
      </Box>
    </>
  );
};

export default BottomContent;
