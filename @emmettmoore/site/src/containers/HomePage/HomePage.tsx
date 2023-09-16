/* eslint-disable filenames/match-exported */
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
            <div />
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
