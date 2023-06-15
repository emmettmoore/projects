import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  noIndex?: boolean;
}

const HtmlHead = ({
  title,
  description,
  noIndex = false,
}: Props): JSX.Element => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" content={description} name="description" />
      <meta key="og:title" content={title} name="description" />
      {noIndex && <meta key="robots" content="noindex" name="robots" />}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
  );
};

export default HtmlHead;
