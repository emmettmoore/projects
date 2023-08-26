/* eslint-disable react/jsx-sort-props */
import { Typography, AppBar, Toolbar } from '@mui/material';

import getNavItems from './getNavItems';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Footer from './Footer';
import styles from './SitePage.module.scss';

interface Props {
  children: React.ReactNode;
}

const SitePage = ({ children }: Props): JSX.Element => {
  const navItems = getNavItems();
  return (
    <div className={styles.sitePage}>
      <AppBar color="primary" component="nav" position="sticky">
        <Toolbar className={styles.toolbar}>
          <Typography
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
            component="div"
            variant="subtitle1">
            Emmett Moore
          </Typography>
          <DesktopMenu navItems={navItems} />
          <MobileMenu navItems={navItems} />
        </Toolbar>
      </AppBar>
      <div className={styles.contentWrapper}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default SitePage;
