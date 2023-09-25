/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import { Box } from '@mui/material';

import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';
import Charts from './Charts';
import BottomContent from './BottomContent';

import Content from './Content';
import Head from './Head';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head />
      <SitePage>
        <PageContainer maxWidth="xl">
          <PageContent align="left">
            <Box sx={{ p: 2, display: `flex` }}>
              <Box sx={{ minWidth: `50%` }}>
                <Content />
              </Box>
              <Box sx={{ minWidth: `50%` }}>
                <Charts />
              </Box>
            </Box>
            <BottomContent />
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
