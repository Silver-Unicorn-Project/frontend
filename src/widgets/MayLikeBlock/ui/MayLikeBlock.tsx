import React from 'react';
import cls from './MayLikeBlock.module.scss';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { Icon } from 'shared/ui/Icon/Icon';
import BorderLine from '../../../shared/assets/icons/border_line.svg';
import {ProductSlider} from 'features/ProductSlider/ui/ProductSlider';

interface MayLikeBlockProps {
  className?: string;
}

export const MayLikeBlock = ({className}: MayLikeBlockProps) => {
  return (
    <div className={classNames(cls.mayLikeContainer, {}, [className])}>
      <div className={cls.headerContainer}>
        <p className={ cls.headerText }>Распродажа</p>
        <Icon Svg={ BorderLine } className={ cls.headerBoarderLine }/>
      </div>
      <ProductSlider />
    </div>
  );
}
