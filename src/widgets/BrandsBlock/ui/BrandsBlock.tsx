import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './BrandsBlock.module.scss'
import React from 'react'
import BorderLine from 'shared/assets/icons/border_line.svg'
import BrandsSlider from 'features/BrandsSlider'
import { Icon } from 'shared/ui/Icon/Icon'

interface BrandsBlockProps {
    className?: string;
}

export const BrandsBlock = ( { className }: BrandsBlockProps ) => {

    return (
        <div className={ classNames( cls.brandsContainer, {}, [ className ] ) }>
            <div className={ cls.headerContainer }>
                <p className={ cls.headerText }>Бренды</p>
                <Icon Svg={ BorderLine } className={ cls.headerBoarderLine }/>
            </div>
            <BrandsSlider/>
        </div>
    )
}