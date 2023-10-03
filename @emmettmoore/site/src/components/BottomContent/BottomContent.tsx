import { Box, Typography } from '@mui/material';

import {
  EMMETT_GH_PROJECTS_URL,
  PERSONAL_SITE_URL,
  PERSONAL_SITE_OLD_URL,
} from '@site/common/externalLinks';
const BottomContent = (): JSX.Element => {
  return (
    <>
      <Box sx={{ pt: 1, borderTop: `2px solid #00000050`, textAlign: `right` }}>
        <Typography sx={{ mb: 1 }} variant="body2">
          The source for this site lives in my{` `}
          <a href={EMMETT_GH_PROJECTS_URL} rel="noreferrer" target="_blank">
            personal project monorepo.
          </a>
          {` `}
          Check it out
          {` `}
          <a href={PERSONAL_SITE_URL} rel="noreferrer" target="_blank">
            here
          </a>
          .
        </Typography>
        <Typography variant="body2">
          Check out an older version {` `}
          <a href={PERSONAL_SITE_OLD_URL} rel="noreferrer" target="_blank">
            here
          </a>
          .
        </Typography>
      </Box>
    </>
  );
};

export default BottomContent;
