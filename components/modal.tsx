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
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel
              className={`${styles.body} transform bg-white transition-all`}
            >
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
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
