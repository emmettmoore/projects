/* eslint-disable filenames/match-exported */
import { Typography } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';

const Contact = (): JSX.Element => {
  return (
    <>
      <HtmlHead
        description="Contact for Emmett Moore"
        title="Emmett Moore | Contact"
      />
      <SitePage>
        <PageContainer>
          <PageContent>
            <Typography component="h1" variant="h3">
              Contact
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

export default Contact;
