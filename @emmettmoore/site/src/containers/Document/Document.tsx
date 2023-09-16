/* eslint-disable react/jsx-sort-props */
/* eslint-disable filenames/match-exported */
import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <script
          src="https://kit.fontawesome.com/62d9473bb5.js"
          crossOrigin="anonymous"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
