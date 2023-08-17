import React, {ButtonHTMLAttributes, FC, memo} from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/ClassNames';

export enum ThemeButton {
  ClEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
});
