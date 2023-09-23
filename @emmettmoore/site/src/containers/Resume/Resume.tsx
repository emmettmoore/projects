/* eslint-disable filenames/match-exported */
import { Box } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';

import {
  NeighborSchools,
  Tufts,
  HigherGround,
  InsightSquared,
} from './sections';
import styles from './Resume.module.scss';

const Resume = (): JSX.Element => {
  return (
    <>
      <HtmlHead
        description="Resume for Emmett Moore"
        title="Emmett Moore | Resume"
      />
      <SitePage>
        <PageContainer>
          <PageContent>
            <Box className={styles.jobs} sx={{ pt: 2 }}>
              <HigherGround />
              <NeighborSchools />
              <InsightSquared />
              <Tufts />
            </Box>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default Resume;
