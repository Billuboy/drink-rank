import React from 'react';

import Header from '@components/header';
import Footer from '@components/footer';
import styles from '@styles/layouts/common.module.css';

type Props = {
  children: JSX.Element;
};
export default function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
