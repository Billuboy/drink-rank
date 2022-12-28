import React from 'react';

type Styles = {
  'input-container': string;
};
type Props = {
  placeholder: string;
  Icon: () => JSX.Element;
  styles: Styles;
};

export default function ImageInput({ placeholder, Icon, styles }: Props) {
  return (
    <div className={styles['input-container']}>
      <input type="text" placeholder={placeholder} autoComplete="off" />
      <Icon />
    </div>
  );
}
