import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  noIndex?: boolean;
  children?: React.ReactNode;
}

const HtmlHead = ({
  title,
  description,
  noIndex = false,
  children,
}: Props): JSX.Element => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" content={description} name="description" />
      <meta key="og:title" content={title} name="description" />
      {noIndex && <meta key="robots" content="noindex" name="robots" />}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {children}
    </Head>
  );
};

export default HtmlHead;
