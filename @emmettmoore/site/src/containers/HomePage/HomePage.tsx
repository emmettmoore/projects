/* eslint-disable filenames/match-exported */
import { Typography } from '@mui/material';
import SitePage from '@site/components/SitePage';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';

import HtmlHead from '@site/components/HtmlHead';

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
            <Typography paragraph variant="body2">
              Check out an earlier version of this site built with Foundation
              and Knockout.js <a href="/">here</a>.
            </Typography>
            <Typography paragraph variant="body2">
              Places I’ve been / places i’ve climbed / other places that matter
              to me
              <a href="/">here</a>.
            </Typography>
            <Typography variant="body2">Next Up Books</Typography>
            <ul>
              <li>A World on the Wing</li>
              <li>The Weather Machine</li>
              <li>Words of Radiance</li>
              <li>Designing Data Intensive Applications</li>
            </ul>
            <Typography variant="body2">Podcasts i enjoy</Typography>
            <ul>
              <li>Odd Lots</li>
              <li>Good One</li>
              <li>Minds Behind Maps</li>
              <li>Bill Simmons Podcast</li>
              <li>Upswing Level Up Podcast</li>
            </ul>
            <Typography variant="body2">Newsletters I read</Typography>
            <ul>
              <li>Axios Pro Rata</li>
              <li>Money Stuff</li>
              <li>Serious Eats</li>
              <li>Internal Tech Emails</li>
              <li>Typescript Weekly</li>
            </ul>
            <Typography variant="body2">Websites that inspire me</Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  <a href="https://www.worrydream.com">worrydream.com</a>
                </Typography>
              </li>
            </ul>
            <Typography variant="body2">
              Things I’d Do if I had infinite time.
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">Play music again</Typography>
                <Typography variant="body2">
                  Write a series of blog posts about the top things i learned
                  working at NeighborSchools.
                </Typography>
              </li>
            </ul>
            <Typography variant="body2">Things I‘m Learning</Typography>
            <ul>
              <li>
                <Typography variant="body2">AWS Course</Typography>
              </li>
            </ul>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
