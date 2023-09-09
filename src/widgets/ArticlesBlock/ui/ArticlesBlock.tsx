import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './ArticlesBlock.module.scss'
import React from 'react'
import BorderLine from 'shared/assets/icons/border_line.svg'
import { Link } from 'react-router-dom'
import { Card } from 'shared/ui/Card/Card'
import HorseInGlassesImg from 'shared/assets/icons/horseInGlasses.png'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticlesBlockProps {
    className?: string;
}

export const ArticlesBlock = ( { className }: ArticlesBlockProps ) => {

    return (
        <div className={ classNames( cls.articlesContainer, {}, [ className ] ) }>
            <div className={ cls.headerContainer }>
                <p className={ cls.headerText }>Полезные статьи</p>
                <Icon Svg={ BorderLine } className={ cls.headerBoarderLine }/>
            </div>
            <table className={ classNames( cls.tableBody, {}, [ className ] ) }>
                <tbody>
                <tr>
                    <td>
                        <Link to={ '/' }>
                            <Card className={ cls.cardBig }>
                                <img src={ HorseInGlassesImg } alt="Одежда для всадников" className={ cls.imgBig }/>
                                <div className={ cls.cardBigText }>
                                    Как подобрать нужный размер изделия для лошади?
                                </div>
                            </Card>
                        </Link>
                    </td>
                    <td>
                        <div>
                            <Link to={ '/' }>
                                <Card className={ cls.cardSmallSplit }>
                                    <p className={ cls.cardSmallText }>
                                        В каких случаях используют попону?
                                    </p>
                                </Card>
                            </Link>
                            <Link to={ '/' }>
                                <Card className={ cls.cardSmallSplit }>
                                    <p className={ cls.cardSmallText }>
                                        Какой выбрать зимний вальтрап?
                                    </p>
                                </Card>
                            </Link>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <table className={ classNames( cls.tableBody, {}, [ className ] ) }>
                <tbody>
                <tr>
                    <td>
                        <Link to={ '/' }>
                            <Card className={ cls.cardSmall }>
                                <p className={ cls.cardSmallText }>
                                    Как сушить дождевую попону?
                                </p>
                            </Card>
                        </Link>
                    </td>
                    <td>
                        <Link to={ '/' }>
                            <Card className={ cls.cardSmall }>
                                <p className={ cls.cardSmallText }>
                                    Какой бальзам лучше? Сравнение товаров.
                                </p>
                            </Card>
                        </Link>
                    </td>
                    <td>
                        <Link to={ '/' }>
                            <Card className={ cls.cardSmall }>
                                <p className={ cls.cardSmallText }>
                                    Как выбрать <br/> подкормку?
                                </p>
                            </Card>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}