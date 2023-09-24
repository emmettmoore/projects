/* eslint-disable filenames/match-exported */
import { Box, Typography } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';
import { EMMETT_LINKEDIN_URL } from '@site/common/externalLinks';

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
            <Typography variant="h2">Contact Me</Typography>
            <Box sx={{ mt: 4 }}>
              <Typography paragraph variant="body2">
                Got something to tell me? Let’s hear it it!
              </Typography>
              <Typography paragraph sx={{ mt: 1 }} variant="body2">
                Send me a message on <a href={EMMETT_LINKEDIN_URL}>LinkedIn</a>.
                {` `}
              </Typography>
              <Typography paragraph sx={{ mt: 1 }} variant="body2">
                (Yes, I will see it)
              </Typography>
            </Box>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default Contact;
