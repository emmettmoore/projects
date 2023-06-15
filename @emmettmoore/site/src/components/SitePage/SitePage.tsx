import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';

import styles from './SitePage.module.scss';

interface Props {
  children: React.ReactNode;
}

const SitePage = ({ children }: Props): JSX.Element => {
  return (
    <>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <div className={styles.toolbarLeft}>
            <Button color="inherit" component={Link} href="/">
              Emmett Moore
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default SitePage;
