/* eslint-disable filenames/match-exported */
import { Box } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';
import BottomContent from '@site/components/BottomContent';

import HtmlHead from '@site/components/HtmlHead';

import {
  NeighborSchools,
  Tufts,
  HigherGround,
  InsightSquared,
} from './sections';
import styles from './MyWork.module.scss';

const MyWork = (): JSX.Element => {
  return (
    <>
      <HtmlHead
        description="A summary of Emmett Moore's work"
        title="Emmett Moore | My Work"
      />
      <SitePage>
        <PageContainer>
          <PageContent>
            <Box className={styles.jobs} sx={{ pt: 2, mb: 4 }}>
              <HigherGround />
              <NeighborSchools />
              <InsightSquared />
              <Tufts />
            </Box>
            <BottomContent />
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default MyWork;
