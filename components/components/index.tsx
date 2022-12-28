import React from 'react';

import styles from '@styles/components/styles/index.module.css';
import Buttons from './buttons';
import Forms from './forms';
import Modal from './modal';
import ProductCard from './productCard';
import UserReview from './userReview';

export default function ComponentSections() {
  return (
    <div className={styles.container}>
      <Buttons />
      <Forms />
      <Modal />
      <ProductCard />
      <UserReview />
    </div>
  );
}
