import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './SalesBlock.module.scss'
import BorderLine from '../../../shared/assets/icons/border_line.svg'
import img1 from '../../../shared/assets/mockImg/img1.png'
import img2 from '../../../shared/assets/mockImg/img2.png'
import img3 from '../../../shared/assets/mockImg/img3.png'
import img4 from '../../../shared/assets/mockImg/img4.png'
import img5 from '../../../shared/assets/mockImg/img5.png'
import img6 from '../../../shared/assets/mockImg/img6.png'
import img7 from '../../../shared/assets/mockImg/img7.png'
import img8 from '../../../shared/assets/mockImg/img8.png'
import { DiscountCard } from 'entities/DiscountCard'
import { Icon } from 'shared/ui/Icon/Icon'

interface SalesBlockProps {
    className?: string;
}

export const SalesBlock = ( { className }: SalesBlockProps ) => {
    const mockData = [
        {
            id: '1',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img1 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '2',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img2 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '3',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img3 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '4',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img4 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '5',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img5 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '6',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img6 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '7',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img7 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },
        {
            id: '8',
            description: 'Попона "Cotton Waffle"',
            imageUrl: String( img8 ),
            oldPrice: '9500 р.',
            newPrice: '7500 р.',
        },

    ]

    const maxInLine = 5

    const maxLines = 2

    const slicedData = mockData.slice( 0, maxInLine * maxLines )

    const lines = []
    for ( let i = 0; i < slicedData.length; i += maxLines ) {
        const line = slicedData.slice( i, i + maxLines )
        lines.push( line )
    }

    return (
        <div className={ classNames( cls.salesContainer, {}, [ className ] ) }>
            <div className={ cls.headerContainer }>
                <p className={ cls.headerText }>Распродажа</p>
                <Icon Svg={ BorderLine } className={ cls.headerBoarderLine }/>
            </div>
            <div className={ cls.cardsContainer }>
                { lines.map( ( line, lineIndex ) => (
                    <div key={ lineIndex }>
                        { line.map( ( card ) => (
                            <DiscountCard
                                key={ card.id }
                                description={ card.description }
                                imageUrl={ card.imageUrl }
                                oldPrice={ card.oldPrice }
                                newPrice={ card.newPrice }
                            />
                        ) ) }
                    </div>
                ) ) }
            </div>
            <div className={ cls.showAllContainer }>
                Смотреть все
            </div>
        </div>
    )
}