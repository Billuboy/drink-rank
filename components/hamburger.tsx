import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

import { Logo } from '@logos';
import { Cross } from '@icons';
import styles from '@styles/components/hamburger.module.css';

type Props = {
  isOpen: boolean;
  closeCB: () => void;
};

export default function HamburgerMenu({ isOpen, closeCB }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={closeCB}>
        <div className={styles['dialog-panel-outer-container']}>
          <div className={styles['dialog-panel-inner-container']}>
            <Dialog.Panel className={styles.panel}>
              <div className={styles['panel-top']}>
                <Logo className={styles.logo} />
                <Cross className={styles.cross} onClick={closeCB} />
              </div>
              <Link href="/" className="heading-4" onClick={closeCB}>
                Styles
              </Link>
              <Link href="/components" className="heading-4" onClick={closeCB}>
                Components
              </Link>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
