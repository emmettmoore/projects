/* eslint-disable filenames/match-exported */
import Head from 'next/head';
import { Merriweather } from 'next/font/google';
// import styles from './HomePage.module.css';

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
});

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Emmett Moore</title>
        <meta content="Built with Next.js" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
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
      </main>
    </>
  );
};

export default HomePage;
