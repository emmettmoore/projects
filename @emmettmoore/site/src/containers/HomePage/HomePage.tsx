/* eslint-disable filenames/match-exported */
import { Typography } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';

// import styles from './HomePage.module.css';

const HomePage = (): JSX.Element => {
  // Old Site:
  // https://web.archive.org/web/20211023195451/http://www.emmettwmoore.com/resume/
  return (
    <>
      <HtmlHead
        description="Personal website for Emmett Moore"
        title="Emmett Moore"
      />
      <SitePage>
        <PageContainer>
          <PageContent>
            <Typography component="h1" variant="h2">
              Emmett Moore
            </Typography>
            <Typography variant="body2">
              Welcome to my corner of the web
            </Typography>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
