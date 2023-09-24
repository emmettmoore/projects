import { Typography } from '@mui/material';

import Media from './Media';

const Content = (): JSX.Element => {
  return (
    <>
      <Media />
      <Typography paragraph variant="body2">
        Check out an earlier version of this site built with Foundation and
        Knockout.js{` `}
        <a
          href="https://web.archive.org/web/20211130202131/http://www.emmettwmoore.com/"
          rel="noreferrer"
          target="_blank">
          here
        </a>
        .
      </Typography>
    </>
  );
};

export default Content;
