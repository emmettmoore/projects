/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import Image, { ImageProps } from 'next/image';
import { useTheme, Box } from '@mui/material';

import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';
import BottomContent from '@site/components/BottomContent';
import { EMMETT_AND_ROCKY } from '@site/common/static';

import { HomeCity, Interests, RemoteWork, Frontend } from './lifeCharts';

import Head from './Head';
import Content from './Content';

import styles from './HomePage.module.scss';

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Head />
      <SitePage>
        <PageContainer maxWidth="xl">
          <PageContent align="left">
            <Box
              sx={{
                p: 2,
                display: `flex`,
                flexDirection: { xs: `column`, md: `row` },
              }}>
              <Box sx={{ minWidth: `50%` }}>
                <Image
                  alt="Me and my cat"
                  className={styles.image}
                  height={400}
                  src={EMMETT_AND_ROCKY}
                  width={300}
                />
                <Box sx={{ mt: 6 }}>
                  <Content />
                </Box>
              </Box>
              <Box sx={{ minWidth: `50%` }}>
                <Box
                  className={styles.charts}
                  sx={{ display: `block`, width: `100%` }}>
                  <HomeCity />
                  <Box sx={{ mt: 4 }}>
                    <Interests />
                  </Box>
                  <RemoteWork />
                  <Frontend />
                </Box>
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
