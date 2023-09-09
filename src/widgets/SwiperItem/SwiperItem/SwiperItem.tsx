import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './SwiperItem.module.scss'

interface SwiperItemProps {
    className?: string;
    SwiperImg?: string;
}

export const SwiperItem = ( props: SwiperItemProps ) => {
    return (
        <div className={ classNames( cls.SwiperItem, {}, [ props.className ] ) }>
            <img src={ props.SwiperImg } alt="" className="swiper-img"/>
        </div>
    )
}
