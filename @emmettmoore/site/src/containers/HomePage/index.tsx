/* eslint-disable filenames/match-exported */
import { Head } from 'next/document';
import { merriweather, lato } from '@site/fonts';

// import styles from './HomePage.module.css';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Emmett Moore</title>
        <meta content="Built with Next.js" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <main>
        <div className={merriweather.className}>
          <p>Hello! Here’s some example stuff in Merriweather</p>
          <div>
            <a href="/" rel="noopener noreferrer">
              Link time.
            </a>
          </div>
        </div>
        <div className={lato.className}>
          <p>But you should also try Lato out for size.</p>
          <div>
            <a href="/" rel="noopener noreferrer">
              Link time.
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
