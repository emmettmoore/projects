import { IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from 'next/link';

import styles from './ExternalLinks.module.scss';

const ExternalLinks = (): JSX.Element => {
  return (
    <Box sx={{ display: `flex` }}>
      <IconButton
        classes={{
          root: styles.iconButtonRoot,
        }}
        className={styles.iconLinkButton}
        component={Link}
        href="https://github.com/emmettmoore"
        size="large"
        sx={{ color: `white` }}
        target="_blank">
        <GitHubIcon className={styles.icon} fontSize="inherit" />
      </IconButton>
      <IconButton
        classes={{
          root: styles.iconButtonRoot,
        }}
        className={styles.iconLinkButton}
        component={Link}
        href="https://www.linkedin.com/in/emmett-moore/"
        size="large"
        sx={{ color: `white` }}
        target="_blank">
        <LinkedInIcon className={styles.icon} fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default ExternalLinks;
