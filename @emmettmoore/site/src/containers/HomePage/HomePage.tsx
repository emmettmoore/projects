/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import { useTheme, useMediaQuery } from '@mui/material';

import PageContainer from '@site/components/PageContainer';
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
        <PageContainer>
          <PageContent align="left">
            {isMdDown ? <MobileLayout /> : <DesktopLayout />}
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
