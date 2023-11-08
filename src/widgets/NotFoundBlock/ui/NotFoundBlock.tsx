import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './NotFoundBlock.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import StatusCode from '../../../shared/assets/icons/404StatusCode.png';

interface NotFoundBlockProps {
  className?: string;
}

export const NotFoundBlock = ({ className }: NotFoundBlockProps) => {
  return (
    <div className={classNames(cls.notFoundBlock, {}, [className])}>
      <h1 className={cls.notFoundTitle}>Страница не найдена</h1>
      <img src={StatusCode} alt="Ошибка 404" className={cls.notFoundStatusCode}/>
      <Link to='/'>
        <Button theme={ ThemeButton.ClEAR } className={ cls.btn }>
          Перейти на главную
        </Button>
      </Link>
    </div>
  );
}