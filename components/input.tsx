import React from 'react';

type Styles = {
  'input-container': string;
};
type NoIconInput = {
  placeholder: string;
  styles: Styles;
};
type IconInput = {
  placeholder: string;
  styles: Styles;
  Icon: () => JSX.Element;
  type?: 'text' | 'password';
};

export default function Input({
  placeholder,
  styles,
  ...args
}: IconInput | NoIconInput) {
  if ('Icon' in args) {
    const { Icon, type } = args;

    return (
      <div className={styles['input-container']}>
        <input
          type={type || 'text'}
          placeholder={placeholder}
          autoComplete="off"
        />
        <Icon />
      </div>
    );
  }

  return (
    <div className={styles['input-container']}>
      <input type="text" placeholder={placeholder} autoComplete="off" />
    </div>
  );
}
