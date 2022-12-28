import React from 'react';
import Link from 'next/link';

import styles from '@styles/components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <Link href="/">About Bev rank</Link>
        <Link href="/">Terms of use</Link>
        <Link href="/">Privacy Policy</Link>
        <p>&copy; 2022 BEVrank.</p>
      </div>
      <p>
        Product, brand, and company names likely belong to their respective
        companies and are used solely to identify their wonderful beverages.
        You&apos;re welcome.
      </p>
    </footer>
  );
}
