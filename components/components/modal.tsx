import React, { useState } from 'react';

import Button from '@components/button';
import Modal from '@components/modal';
import styles from '@styles/components/components/modal.module.css';

export default function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <h1 className="heading-1 my-15">Modal</h1>
      <div className={styles.container}>
        <Button
          text="Show Modal"
          onClick={() => setIsOpen(true)}
          styles={{
            button: `button-1 ${styles['modal-button-base']} ${
              isOpen
                ? styles['modal-button-clicked']
                : styles['modal-button-not-clicked']
            }`,
          }}
        />
        <Modal isOpen={isOpen} closeCB={closeModal} />
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
