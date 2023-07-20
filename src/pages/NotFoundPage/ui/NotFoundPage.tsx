import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return <div className={classNames(cls.NotFoundPage, {}, [className])}>Страница не найдена</div>;
};
