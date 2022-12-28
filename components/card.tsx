import React, { useEffect, useState } from 'react';

import styles from '@styles/components/card.module.css';

type Props = {
  src: string[];
  bname: string;
  dname: string;
};

export default function Card({ src, bname, dname }: Props) {
  const [index, setIndex] = useState<0 | 1>(0);
  const [startCarousel, setCarousel] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (startCarousel) {
      timer = setInterval(() => {
        setIndex((curr) => {
          if (curr === 1) return 0;
          return 1;
        });
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [startCarousel]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setCarousel(true)}
      onMouseLeave={() => setCarousel(false)}
    >
      <img src={src[index]} alt={bname} />
      <small className="text-overline">{bname}</small>
      <p className="h-18 heading-4">{dname}</p>
    </div>
  );
}
