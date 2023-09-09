import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './DiscountCard.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import favIconForCards from '../../../shared/assets/icons/favIconForCards.svg'
import { Icon } from 'shared/ui/Icon/Icon'

interface DiscountCardProps {
    className?: string;
    description?: string;
    imageUrl?: string;
    oldPrice?: string;
    newPrice?: string;
}

export const DiscountCard = ( props: DiscountCardProps ) => {
    const { className, newPrice, oldPrice, imageUrl, description } = props

    return (
        <div className={ classNames( cls.discountCardContainer, {}, [ className ] ) }>
            <div className={ cls.discountCardInfo }>
                <Icon
                    Svg={ favIconForCards }
                    className={ cls.favIconForCards }
                    width={ '20px' }
                    height={ '18px' }
                />
                <img src={ String( imageUrl ) } alt={ description } className={ cls.img }/>
                <div className={ cls.priceContainer }>
                    <div className={ cls.newPrice }>{ newPrice }</div>
                    <div className={ cls.oldPrice }>{ oldPrice }</div>
                </div>
                <div className={ cls.description }>{ description }</div>
            </div>
            <Button theme={ ThemeButton.ClEAR } className={ cls.btn }>
                В корзину
            </Button>
        </div>
    )
}