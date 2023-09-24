/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import { Box } from '@mui/material';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import Content from './Content';
import Map from './Map';

import Head from './Head';

const HomePage = (): JSX.Element => {
  // Old Site:
  // https://web.archive.org/web/20211023195451/http://www.emmettwmoore.com/resume/
  return (
    <>
      <Head />

      <SitePage>
        <PageContainer>
          <PageContent align="left">
            <Box sx={{ position: `relative`, display: `flex` }}>
              <div>
                <Content />
              </div>
              <Map />
            </Box>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
