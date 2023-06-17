/* eslint-disable filenames/match-exported */
import { Typography } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';

import styles from './Resume.module.css';

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
            <Typography component="h1" variant="h3">
              Resume
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

export default Resume;
