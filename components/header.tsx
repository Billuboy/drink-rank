import React, { useState } from 'react';
import Link from 'next/link';

import { LoginShark1, LoginShark2, Search } from '@icons';
import { Logo } from '@logos';
import styles from '@styles/components/header.module.css';
import Input from './input';

export default function Header() {
  const [shark, setShark] = useState<1 | 2>(1);

  return (
    <header className={styles.container}>
      <div className={styles['left-container']}>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <Link href="/">Styles</Link>
        <Link href="/components">Components</Link>
      </div>
      <div className={styles['right-container']}>
        <Input
          placeholder="Search"
          Icon={Search}
          styles={{ 'input-container': styles['input-container'] }}
        />
        {shark === 1 ? (
          <LoginShark1 onMouseEnter={() => setShark(2)} />
        ) : (
          <LoginShark2 onMouseLeave={() => setShark(1)} />
        )}
      </div>
    </header>
  );
}
