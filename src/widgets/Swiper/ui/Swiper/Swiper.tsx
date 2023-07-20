import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import Examle1 from "../../../../shared/assets/icons/ExampleHorse.png"
import cls from './Swiper.module.scss';
import { SwiperItem } from '../../../SwiperItem/index';
interface SwiperProps {
  className?: string;
}

export const Swiper = ({ className }: SwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { className: 'item-1', SwiperImg: Examle1 },
    { className: 'item-2', SwiperImg: 'image-2.jpg' },
    // Add more items as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`${cls.Swiper} ${className}`}>
      <div className={cls.SwiperContainer}>
        <div className={cls.SwiperItems} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <SwiperItem key={index} className={item.className} SwiperImg={item.SwiperImg} />
          ))}
        </div>
      </div>
      <div className={cls.Pagination}>
        {items.map((_, index) => (
          <div
            key={index}
            className={`${cls.PaginationItem} ${currentIndex === index ? cls.Active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
     
    </div>
  );
};
