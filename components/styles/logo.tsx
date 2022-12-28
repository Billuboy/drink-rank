import React from 'react';

import { Logo as CompanyLogo } from '@logos';
import styles from '@styles/components/styles/logo.module.css';

export default function Logo() {
  return (
    <>
      <h1 className="heading-1 my-15">Logo</h1>
      <CompanyLogo className={`py-15 ${styles.logo}`} />
      <hr className="dashed-rule" />
    </>
  );
}
