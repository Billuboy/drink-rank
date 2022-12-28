import {
  Cross,
  DownArrow,
  Hamburger,
  Heart,
  Hide,
  RightArrow,
  Search,
  Show,
  Star,
  UpArrow,
} from '@icons';
import React from 'react';

import styles from '@styles/components/styles/icons.module.css';

export default function Icons() {
  return (
    <>
      <h1 className="heading-1 my-15">Icons</h1>
      <div className={`py-15 ${styles.container}`}>
        <Show className="icon" />
        <Hide className="icon" />
        <Cross className="icon" />
        <DownArrow className="icon" />
        <UpArrow className="icon" />
        <RightArrow className="icon" />
        <Search className="icon" />
        <Hamburger className="icon" />
        <Star className="icon" />
        <Star className={`icon ${styles['filled-star']}`} />
        <Heart className="icon" />
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
