import React from 'react';

import styles from '@styles/components/styles/images.module.css';

export default function Images() {
  return (
    <>
      <h1 className="heading-1 my-15">Images</h1>
      <div className={`py-15 ${styles.container}`}>
        <img src="/no_image.png" alt="No C an" className="beverage-image" />
        <img
          src="https://jeffbayer.com/wp-content/uploads/2022/12/coca-cola.jpg"
          alt="Cola Can 1"
          className="beverage-image"
        />
        <img
          src="https://jeffbayer.com/wp-content/uploads/2022/12/coca-cola-can.jpg"
          alt="Cola Can 2"
          className="beverage-image"
        />
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
