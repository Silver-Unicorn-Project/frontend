import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './GoodsCategories.module.scss'
import { Card } from 'shared/ui/Card/Card'
import { Link } from 'react-router-dom'
import RiderCloth from '../../../shared/assets/icons/rider_cloth.png'
import HorseAmmunition from '../../../shared/assets/icons/horse_ammunition.png'
import HorseFood from '../../../shared/assets/icons/horse_food.png'
import HorseSnack from '../../../shared/assets/icons/horse_snacks.png'
import HorseMuesli from '../../../shared/assets/icons/horse_muesli.png'
import HorseCare from '../../../shared/assets/icons/horse_care.png'
import AmmunitionCare from '../../../shared/assets/icons/inventory_care.png'
import HorseOil from '../../../shared/assets/icons/horse_oil.png'
import HerbsForHorses from '../../../shared/assets/icons/herbs_for_horses.png'
import VetProducts from '../../../shared/assets/icons/vet_products.png'

interface GoodsCategoriesProps {
    className?: string;
}

export const GoodsCategories = ( { className }: GoodsCategoriesProps ) => {
    return (
        <table className={ classNames( cls.tableBody, {}, [ className ] ) }>
            <tbody>
            <tr>
                <td>
                    <Link to={ '/' }>
                        <Card className={ cls.cardBig }>
                            <img src={ RiderCloth } alt="Одежда для всадников" className={ cls.imgBig }/>
                        </Card>
                    </Link>
                </td>
                <td>
                    <Link to={ '/' }>
                        <Card className={ cls.cardBig }>
                            <img src={ HorseAmmunition } alt="Аммуниция для лошади" className={ cls.imgBig }/>
                        </Card>
                    </Link>
                </td>
                <td>
                    <div>
                        <Link to={ '/' }>
                            <img src={ HorseCare } alt="Уход за лошадьми" className={ cls.imgSmallSplit }/>
                        </Link>
                        <Link to={ '/' }>
                            <img src={ AmmunitionCare } alt="Уход за аммуницией" className={ cls.imgSmallSplit }/>
                        </Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={ '/' }>
                        <Card className={ cls.cardBig }>
                            <img src={ HorseFood } alt="Подкормки для лошадей" className={ cls.imgBig }/>
                        </Card>
                    </Link>
                </td>
                <td>
                    <Link to={ '/' }>
                        <Card className={ cls.cardBig }>
                            <img src={ HorseSnack } alt="Лакомства для лошадей" className={ cls.imgBig }/>
                        </Card>
                    </Link>
                </td>
                <td>
                    <Link to={ '/' }>
                        <Card className={ cls.cardBig }>
                            <img src={ HorseMuesli } alt="Мюсли для лошадей" className={ cls.imgBig }/>
                        </Card>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={ '/' }>
                        <img src={ HorseOil } alt="Сиропы и масла для лошадей" className={ cls.imgSmall }/>
                    </Link>
                </td>
                <td>
                    <Link to={ '/' }>
                        <img src={ HerbsForHorses } alt="Травяные сборы для лошадей" className={ cls.imgSmall }/>
                    </Link>
                </td>
                <td>
                    <Link to={ '/' }>
                        <img src={ VetProducts } alt="Ветеринарные препараты" className={ cls.imgSmall }/>
                    </Link></td>
            </tr>
            </tbody>
        </table>
    )
}