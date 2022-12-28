/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';

import styles from '@styles/components/modal.module.css';
import { Cross, Hide, Show } from '@icons';
import Input from './input';
import Button from './button';

type Props = {
  isOpen: boolean;
  closeCB: () => void;
};

export default function Modal({ isOpen, closeCB }: Props) {
  const [show, setShow] = useState(false);

  const ShowIcon = () => <Show onClick={() => setShow(false)} />;

  const HideIcon = () => <Hide onClick={() => setShow(true)} />;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={styles['overlay-container']}
        onClose={closeCB}
      >
        <Transition.Child
          as={Fragment}
          enter={styles['overlay-transition-enter']}
          enterFrom={styles['overlay-transition-enterFrom']}
          enterTo={styles['overlay-transition-enterTo']}
          leave={styles['overlay-transition-leave']}
          leaveFrom={styles['overlay-transition-enterTo']}
          leaveTo={styles['overlay-transition-enterFrom']}
        >
          <Dialog.Overlay className={styles.overlay} />
        </Transition.Child>

        <div className={styles['dialog-outer-div']}>
          <div className={styles['dialog-inner-div']}>
            <Transition.Child
              as={Fragment}
              enter={styles['panel-transition-enter ']}
              enterFrom={styles['panel-transition-enterFrom']}
              enterTo={styles['panel-transition-enterTo']}
              leave={styles['panel-transition-leave']}
              leaveFrom={styles['panel-transition-enterTo']}
              leaveTo={styles['panel-transition-enterFrom']}
            >
              <Dialog.Panel className={styles.body}>
                <Dialog.Title as="div" className={styles.title}>
                  <Cross onClick={closeCB} />
                </Dialog.Title>
                <Dialog.Description as="div" className={styles.description}>
                  <h6 className="body-1">Log in</h6>
                  <Input
                    placeholder="Email Address"
                    styles={{
                      'input-container': styles['email-input-container'],
                    }}
                  />
                  <Input
                    placeholder="Password"
                    Icon={show ? ShowIcon : HideIcon}
                    type={show ? 'text' : 'password'}
                    styles={{
                      'input-container': styles['password-input-container'],
                    }}
                  />
                  <Button
                    text="Log In!"
                    onClick={closeCB}
                    styles={{ button: styles['login-button'] }}
                  />
                  <hr className="small-dashed-rule" />
                  <Link href="/" className={`body-1 ${styles['bottom-text']}`}>
                    Create a new account
                  </Link>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
