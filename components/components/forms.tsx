import React from 'react';

import { Search } from '@icons';
import Input from '@components/input';
import styles from '@styles/components/header.module.css';

export default function Forms() {
  return (
    <>
      <h1 className="heading-1 my-15">Forms</h1>
      <div className={`py-15 ${styles['form-container']}`}>
        <Input
          placeholder="Search"
          Icon={Search}
          styles={{ 'input-container': styles['input-container'] }}
        />
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
