import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div className={cls.ldsHourglass}></div>
    </div>
  );
};
