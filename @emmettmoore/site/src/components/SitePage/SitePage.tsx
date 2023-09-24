/* eslint-disable react/jsx-sort-props */
import { useTheme, Box, AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';

import UnderlineButton from '@site/components/UnderlineButton';
import { MePageRoute } from '@site/common/routes';

import getNavItems from './getNavItems';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Footer from './Footer';
import styles from './SitePage.module.scss';

interface Props {
  children: React.ReactNode;
}

const SitePage = ({ children }: Props): JSX.Element => {
  const theme = useTheme();
  const navItems = getNavItems();
  return (
    <div className={styles.sitePage}>
      <AppBar color="primary" component="nav" position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { sm: 'block' } }}>
            <Link href={MePageRoute.getPath({})}>
              <UnderlineButton
                size="small"
                sx={{ color: theme.palette.common.white }}>
                Emmett Moore
              </UnderlineButton>
            </Link>
          </Box>
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
