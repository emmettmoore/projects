/* eslint-disable filenames/match-exported */
import SitePage from '@site/components/SitePage';
import Image from 'next/image';
import { Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

import { MyWorkRoute } from '@site/common/routes';
import PageContainer from '@site/components/PageContainer';
import PageContent from '@site/components/PageContent';
import BottomContent from '@site/components/BottomContent';
import { EMMETT_AND_ROCKY } from '@site/common/static';

import Head from './Head';

import styles from './HomePage.module.scss';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head />
      <SitePage>
        <PageContainer>
          <PageContent align="left">
            <Box sx={{ margin: `0 auto`, maxWidth: 750 }}>
              <Box
                sx={{
                  p: 2,
                  mb: 8,
                  display: `flex`,
                  flexDirection: { xs: `column`, md: `row` },
                }}>
                <Box sx={{ pr: 2, pl: 2, minWidth: `50%` }}>
                  <Typography paragraph variant="h4">
                    Hi, I’m Emmett
                  </Typography>
                  <Typography paragraph sx={{ mt: 4 }} variant="body1">
                    I am a software engineer living in the Boston area. I love
                    building web apps, early stage product development, and am a
                    huge Typescript nerd.
                  </Typography>
                  <Typography paragraph variant="body1">
                    Check out my professional work here:
                  </Typography>
                  <Box sx={{ margin: `0 auto`, mt: 4 }}>
                    <Box
                      sx={{
                        justifyContent: `center`,
                        display: `flex`,
                        gap: 2,
                      }}>
                      <Link href={MyWorkRoute.getPath({})}>
                        <Button color="secondary" variant="contained">
                          My Work
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ minWidth: `50%` }}>
                  <Image
                    alt="Me and my cat"
                    className={styles.image}
                    height={400}
                    src={EMMETT_AND_ROCKY}
                    width={300}
                  />
                </Box>
              </Box>
              <BottomContent />
            </Box>
          </PageContent>
        </PageContainer>
      </SitePage>
    </>
  );
};

export default HomePage;
