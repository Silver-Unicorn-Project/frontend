import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './SwiperItem.module.scss';

interface SwiperItemProps {
  className?: string;
  SwiperImg?: string;
}
export const SwiperItem = ({ className,SwiperImg }: SwiperItemProps) => {
  return (
    <div className={classNames(cls.SwiperItem, {}, [className])}>
      <img src={SwiperImg} alt="" className="swiper-img" />
    </div>
  );
};
