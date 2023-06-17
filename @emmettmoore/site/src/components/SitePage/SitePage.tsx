/* eslint-disable react/jsx-sort-props */
import { Box, Typography, AppBar, Toolbar } from '@mui/material';

import UnderlineButton from '@site/components/UnderlineButton';
import Link from 'next/link';
import { HomePageRoute, ContactRoute, ResumeRoute } from '@site/common/routes';

import styles from './SitePage.module.scss';

interface Props {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  path: string;
}

const getNavItems = (): Array<NavItem> => {
  return [
    {
      name: `Home`,
      path: HomePageRoute.getPath({}),
    },
    {
      name: `Resume`,
      path: ResumeRoute.getPath({}),
    },
    {
      name: `Contact`,
      path: ContactRoute.getPath({}),
    },
  ];
};

const SitePage = ({ children }: Props): JSX.Element => {
  return (
    <>
      <AppBar color="primary" component="nav" position="sticky">
        <Toolbar className={styles.toolbar}>
          <Typography
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            component="div"
            variant="subtitle1">
            Emmett Moore
          </Typography>
          <Box
            className={styles.rightSide}
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            {getNavItems().map(({ name, path }) => {
              return (
                <Link key={name} href={path}>
                  <UnderlineButton size="small" sx={{ color: '#fff' }}>
                    {name}
                  </UnderlineButton>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default SitePage;
