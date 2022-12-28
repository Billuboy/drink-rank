import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="/SEO/browserconfig.xml" name="msapplication-config" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <title>{title}</title>
      <link href={process.env.NEXT_PUBLIC_APP_URL} rel="canonical" />
      <meta content={description} name="description" />

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="/og.png" property="og:image" />
      <meta content={process.env.NEXT_PUBLIC_APP_URL} property="og:url" />
      <meta content="BEV RANK" property="og:site_name" />
      <meta content="en_US" property="og:locale" />
      <meta content="website" property="og:type" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta content="/og.png" property="twitter:image" />
    </Head>
  );
}
