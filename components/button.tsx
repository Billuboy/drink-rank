import React from 'react';

interface CommonProps {
  onClick: () => void;
  styles: {
    button: string;
  };
}
interface TextOnly extends CommonProps {
  text: string;
}
interface IconOnly extends CommonProps {
  Icon: () => JSX.Element;
}

export default function Button(
  props: TextOnly | IconOnly | (TextOnly & IconOnly)
) {
  if ('text' in props && 'Icon' in props) {
    const { text, Icon, styles, onClick } = props;

    return (
      <button type="button" onClick={onClick} className={styles.button}>
        <Icon />
        <p>{text}</p>
      </button>
    );
  }

  if ('text' in props) {
    const { text, styles, onClick } = props;

    return (
      <button type="button" onClick={onClick} className={styles.button}>
        {text}
      </button>
    );
  }

  const { Icon, styles, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <Icon />
    </button>
  );
}
