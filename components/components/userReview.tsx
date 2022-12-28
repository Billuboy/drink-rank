import React from 'react';

import styles from '@styles/components/components/userReview.module.css';
import { Show } from '@icons';

export default function UserReview() {
  return (
    <>
      <h1 className="heading-1 my-15">User Review</h1>
      <div className="py-15">
        <div className={styles.container}>
          <div className={styles['container-header']}>
            <h6 className="heading-5">[User name]</h6>
            <Show />
          </div>
          <hr className="auto-width-dashed-rule" />
          <p className={`body-1 ${styles.text}`}>
            User content here. Lorem ipsum, or lipsum as it is sometimes known,
            is dummy text used in laying out print, graphic or web designs. The
            passage is attributed to an unknown typesetter in the 15th century
            who is thought to have scrambled parts of Cicero&apos;s De Finibus
            Bonorum et Malorum for use in a type specimen book.
            <br />
            <br />
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout. A practice not without controversy, laying out
            pages with meaningless filler text can be very useful when the focus
            is meant to be on design, not content.
          </p>
        </div>
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
