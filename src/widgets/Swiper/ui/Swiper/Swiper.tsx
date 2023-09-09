import React, { useState } from 'react'
import cls from './Swiper.module.scss'
import { SwiperItem } from '../../../SwiperItem/index'
import Banner1 from '../../../../shared/assets/banner/Banner1.png'
import Banner2 from '../../../../shared/assets/banner/Banner2.png'
import Banner3 from '../../../../shared/assets/banner/Banner3.png'

interface SwiperProps {
    className?: string;
}

export const Swiper = ( { className }: SwiperProps ) => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 )

    const items = [
        {
            className: 'item-1',
            SwiperImg: Banner1,
        },
        {
            className: 'item-2',
            SwiperImg: Banner2
        },
        {
            className: 'item-3',
            SwiperImg: Banner3
        },
        // Add more items as needed
    ]

    const handlePrev = () => {
        setCurrentIndex( ( prevIndex ) => ( prevIndex === 0 ? items.length - 1 : prevIndex - 1 ) )
    }

    const handleNext = () => {
        setCurrentIndex( ( prevIndex ) => ( prevIndex === items.length - 1 ? 0 : prevIndex + 1 ) )
    }

    return (
        <div className={ `${ cls.Swiper } ${ className }` }>
            <div className={ cls.SwiperContainer }>
                <div className={ cls.SwiperItems } style={ { transform: `translateX(-${ currentIndex * 100 }%)` } }>
                    { items.map( ( item, index ) => (
                        <SwiperItem
                            key={ index }
                            className={ item.className }
                            SwiperImg={ item.SwiperImg }
                        />
                    ) ) }
                </div>
            </div>
            <div className={ cls.Pagination }>
                { items.map( ( _, index ) => (
                    <div
                        key={ index }
                        className={ `${ cls.PaginationItem } ${ currentIndex === index ? cls.Active : '' }` }
                        onClick={ () => setCurrentIndex( index ) }
                    />
                ) ) }
            </div>

        </div>
    )
}
