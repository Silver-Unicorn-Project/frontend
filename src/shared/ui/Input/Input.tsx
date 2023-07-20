import React, { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Input.module.scss';
export enum ThemeInput {
  SEARCH = 'search',
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme?: ThemeInput;
}
export const Input: FC<InputProps> = (props) => {
  const { className, theme, ...otherProps } = props;
  return <input className={classNames(cls.Input, {}, [className, cls[theme]])} {...otherProps} />;
};
