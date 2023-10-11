/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import { Container, useTheme, useMediaQuery } from '@mui/material';

import PageContent from '@site/components/PageContent';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

import Head from './Head';

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down(`md`));

  return (
    <>
      <Head />
      <SitePage>
        <Container>
          <PageContent>
            {isMdDown ? <MobileLayout /> : <DesktopLayout />}
          </PageContent>
        </Container>
      </SitePage>
    </>
  );
};

export default HomePage;
