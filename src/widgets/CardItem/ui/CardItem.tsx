import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './CardItem.module.scss';
import heart from '../../../shared/assets/icons/ph_heart-thin.svg';

interface CardItem {
  className?: string;
}

export const CardItem: FC<CardItem> = ({ className }) => {
  return (
    <div className={classNames(cls.cardItem, {}, [className])}>
      <div className={cls.cardItemBanner}>
        {/* <img
          className={cls.cardImage}
          src=""
          alt=""
        /> */}
        <img src={heart} className={cls.heart} alt="" />
      </div>
      <div className={cls.cardText}>
        <h6 className={cls.cardTitle}>SHOWMASTER Вasic Pro</h6>
        <h6 className={cls.cardPrice}>5 000 ₽</h6>
      </div>
    </div>
  );
};
