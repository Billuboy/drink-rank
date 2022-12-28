import React from 'react';

import styles from '@styles/components/styles/typography.module.css';

export default function Typography() {
  return (
    <>
      <h1 className="heading-1 my-15">Typography</h1>
      <div className={`mb-15 ${styles.container}`}>
        <h2 className="heading-1">H1</h2>
        <h3 className="heading-2">H2</h3>
        <h4 className="heading-3">H3</h4>
        <h5 className="heading-4">H4</h5>
        <h6 className="heading-5">H5</h6>
        <h2 className="heading-6">H6</h2>
        <h2 className="subtitle-1">Subtitle 1</h2>
        <h2 className="subtitle-2">Subtitle 2</h2>
        <h2 className="body-1">Body 1</h2>
        <h2 className="body-2">Body 2</h2>
        <h2 className="caption">Caption</h2>
        <h2 className="text-overline">Overline</h2>
        <h2 className="button-1">Button</h2>
        <h2 className="button-2">Button</h2>
        <h2 className="button-3">Button</h2>
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
