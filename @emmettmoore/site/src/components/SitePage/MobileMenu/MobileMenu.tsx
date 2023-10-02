import { useState } from 'react';
import { IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from '../getNavItems';

import MobileDrawer from './MobileDrawer';

interface Props {
  navItems: Array<NavItem>;
}

const MobileMenu = ({ navItems }: Props): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mobileNavItems = navItems.filter(({ visibility }) => {
    return visibility.mobile;
  });

  return (
    <>
      <Box sx={{ display: { sm: 'none' } }}>
        <IconButton
          aria-label="menu"
          color="inherit"
          onClick={(): void => {
            setDrawerOpen(true);
          }}
          size="large">
          <MenuIcon />
        </IconButton>
      </Box>
      <MobileDrawer
        navItems={mobileNavItems}
        onClose={(): void => {
          setDrawerOpen(false);
        }}
        open={drawerOpen}
      />
    </>
  );
};

export default MobileMenu;
