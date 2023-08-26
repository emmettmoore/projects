/* eslint-disable filenames/match-exported */
import { Typography } from '@mui/material';
import PageContainer from '@site/components/PageContainer';
import HtmlHead from '@site/components/HtmlHead';
import PageContent from '@site/components/PageContent';
import SitePage from '@site/components/SitePage';

import styles from './ComponentDemo.module.scss';

const ComponentDemo = (): JSX.Element => {
  return (
    <>
      <HtmlHead description="MUI component demo" title="Component Demo" />
      <SitePage>
        <PageContainer>
          <PageContent>
            <div className={styles.componentDemo}>
              <Typography component="div" variant="h1">
                Header 1
              </Typography>
              <Typography component="div" variant="h2">
                Header 2
              </Typography>
              <Typography component="div" variant="h3">
                Header 3
              </Typography>
              <Typography component="div" variant="h4">
                Header 4
              </Typography>
              <Typography component="div" variant="h5">
                Header 5
              </Typography>
              <Typography component="div" variant="h6">
                Header 6
              </Typography>
              <Typography component="div" variant="body1">
                This is a body1. Water’s like me. It’s lazy ... Boy, it always
                looks for the easiest way to do things Son of a gun. There isn’t
                a rule. You just practice and find out which way works best for
                you. Every day I learn. By now you should be quite happy about
                what’s happening here.
              </Typography>
              <Typography component="div" variant="body2">
                Body 2. For the lack of a better word I call them hangy downs.
                Let’s put some highlights on these little trees. The sun
                wouldn’t forget them. There we go. They say everything looks
                better with odd numbers of things. But sometimes I put even
                numbers—just to upset the critics. Don’t be afraid to make these
                big decisions. Once you start, they sort of just make
                themselves.
              </Typography>
              <Typography component="div" variant="caption">
                Caption. Let’s go up in here, and start having some fun Now we
                can begin working on lots of happy little things. Tree trunks
                grow however makes them happy.
              </Typography>
            </div>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default ComponentDemo;
