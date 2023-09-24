/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import { Box } from '@mui/material';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import Charts from './Charts';

import Head from './Head';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head />
      <SitePage>
        <PageContainer>
          <PageContent align="left">
            <Box
              sx={{ position: `relative`, display: `flex`, minWidth: `100%` }}>
              <Charts />
              {/* <Map /> */}
            </Box>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
