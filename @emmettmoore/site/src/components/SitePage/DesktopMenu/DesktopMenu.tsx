import { useTheme, Box } from '@mui/material';

import UnderlineButton from '@site/components/UnderlineButton';
import Link from 'next/link';
import styles from './DesktopMenu.module.scss';

import { NavItem } from '../getNavItems';

interface Props {
  navItems: Array<NavItem>;
}

const DesktopMenu = ({ navItems }: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      className={styles.desktopMenu}
      sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map(({ name, path }) => {
        return (
          <Link key={name} href={path}>
            <UnderlineButton
              size="small"
              sx={{ color: theme.palette.common.white }}>
              {name}
            </UnderlineButton>
          </Link>
        );
      })}
    </Box>
  );
};

export default DesktopMenu;
