import React from 'react';

import Card from '@components/card';
import styles from '@styles/components/components/productCard.module.css';

export default function ProductCard() {
  return (
    <>
      <h1 className="heading-1 my-15">Product Card</h1>
      <div className={`${styles.container} py-15`}>
        <Card
          src={[
            '/no_image.png',
            'https://jeffbayer.com/wp-content/uploads/2022/12/coca-cola.jpg',
          ]}
          bname="Brand Name"
          dname="Drink Name"
        />
        <Card
          src={[
            'https://jeffbayer.com/wp-content/uploads/2022/12/coca-cola.jpg',
            'https://jeffbayer.com/wp-content/uploads/2022/12/coca-cola-can.jpg',
          ]}
          bname="Brand Name"
          dname="Drink Name"
        />
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
