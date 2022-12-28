/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';

import { Heart, LoginShark1, LoginShark2, Star } from '@icons';
import Button from '@components/button';
import styles from '@styles/components/components/buttons.module.css';

export default function Buttons() {
  const [shark, setShark] = useState<1 | 2>(1);
  const [awesomeButtonClicked, setAwesomeButtonClicked] = useState(false);
  const [likeButtonClicked, setLikeButtonClicked] = useState(false);
  const [starButtonClicked, setStarButtonClicked] = useState(false);
  const [heartButtonClicked, setHeartButtonClicked] = useState(false);

  return (
    <>
      <h1 className="heading-1 my-15">Buttons</h1>
      <div className={styles.container}>
        <Button
          text="Awesome!"
          onClick={() => setAwesomeButtonClicked((curr) => !curr)}
          styles={{
            button: `button-1 ${styles['awesome-button-base']} ${
              awesomeButtonClicked
                ? styles['awesome-button-clicked']
                : styles['awesome-button-not-clicked']
            }`,
          }}
        />
        <Button
          text={likeButtonClicked ? '22' : 'Like'}
          Icon={Heart}
          onClick={() => setLikeButtonClicked((curr) => !curr)}
          styles={{
            button: `button-1 ${styles['like-button-base']} ${
              likeButtonClicked
                ? styles['like-button-clicked']
                : styles['like-button-not-clicked']
            }`,
          }}
        />
        <Button
          Icon={Star}
          onClick={() => setStarButtonClicked((curr) => !curr)}
          styles={{
            button: `${styles['star-button-base']} ${
              starButtonClicked
                ? styles['star-button-clicked']
                : styles['star-button-not-clicked']
            }`,
          }}
        />
        <Button
          Icon={Heart}
          onClick={() => setHeartButtonClicked((curr) => !curr)}
          styles={{
            button: `${styles['heart-button-base']} ${
              heartButtonClicked
                ? styles['heart-button-clicked']
                : styles['heart-button-not-clicked']
            }`,
          }}
        />
        {shark === 1 ? (
          <LoginShark1 onMouseEnter={() => setShark(2)} />
        ) : (
          <LoginShark2 onMouseLeave={() => setShark(1)} />
        )}
      </div>
      <hr className="dashed-rule" />
    </>
  );
}
