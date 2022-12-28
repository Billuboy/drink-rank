import React from 'react';

import styles from '@styles/components/styles/colors.module.css';

export default function Colors() {
  const colors1 = [
    'var(--white)',
    'var(--gray-100',
    'var(--gray-200',
    'var(--gray-300)',
    'var(--gray-400)',
    'var(--gray-500)',
    'var(--gray-600)',
    'var(--gray-700)',
    'var(--blue-300)',
  ];
  const colors2 = [
    'var(--pink-300)',
    'var(--blue-200)',
    'var(--green)',
    'var(--yellow)',
    'var(--purple-300)',
    'var(--gradient-1)',
    'var(--blue-100)',
    'var(--pink-100)',
  ];

  return (
    <>
      <h1 className="heading-1 my-15">Colors</h1>
      <div className="pt-15">
        <div className={styles['colors-container']}>
          {colors1.map((color) => (
            <div
              key={color}
              className="color-card"
              style={{ background: color }}
            />
          ))}
        </div>
        <div className={styles['colors-container']}>
          {colors2.map((color) => (
            <div
              key={color}
              className="color-card"
              style={{ background: color }}
            />
          ))}
        </div>
        <hr className="dashed-rule" />
      </div>
    </>
  );
}
