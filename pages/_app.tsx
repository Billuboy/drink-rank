import '../styles/globals.css';

import type { AppProps } from 'next/app';

import CommonLayout from '@layouts/common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}

export default MyApp;
