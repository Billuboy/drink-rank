import React from 'react';

import styles from '@styles/components/styles/index.module.css';
import Colors from './colors';
import Icons from './icons';
import Images from './images';
import Logo from './logo';
import Typography from './typography';

export default function StyleSections() {
  return (
    <div className={styles.container}>
      <Colors />
      <Typography />
      <Logo />
      <Icons />
      <Images />
    </div>
  );
}
