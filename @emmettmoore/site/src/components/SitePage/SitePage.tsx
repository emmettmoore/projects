/* eslint-disable react/jsx-sort-props */
import { Typography, AppBar, Toolbar } from '@mui/material';

import styles from './SitePage.module.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import getNavItems from './getNavItems';

interface Props {
  children: React.ReactNode;
}

const SitePage = ({ children }: Props): JSX.Element => {
  const navItems = getNavItems();
  return (
    <>
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
      {children}
    </>
  );
};

export default SitePage;
