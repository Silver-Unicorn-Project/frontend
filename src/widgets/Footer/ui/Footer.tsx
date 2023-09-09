import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './Footer.module.scss'
import FooterIcon from 'shared/assets/icons/FooterIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Link } from 'react-router-dom'

interface FooterProps {
    className?: string;
}


export const Footer: FC<FooterProps> = ( { className } ) => {

    return (
        <div className={ classNames( cls.footerContainer, {}, [ className ] ) }>
            <Icon Svg={ FooterIcon } className={ cls.footerIcon } width={ 124 } height={ 146 }/>
            <div className={ cls.buyersContainer }>
                <h5 className={ cls.buyersContainerHeader }>Покупателям</h5>
                <ul>
                    <li className={ cls.buyersContainerList }>
                        <Link className={ cls.buyersContainerListItem } to={ '/' }>
                            Адрес
                        </Link>
                    </li>
                    <li className={ cls.buyersContainerList }>
                        <Link className={ cls.buyersContainerListItem } to={ '/' }>
                            Статьи
                        </Link>
                    </li>
                    <li className={ cls.buyersContainerList }>
                        <Link className={ cls.buyersContainerListItem } to={ '/' }>
                            Политика конфиденциальности
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={ cls.serviceContainer }>
                <h5 className={ cls.serviceContainerHeader }>Сервис</h5>
                <ul>
                    <li className={ cls.serviceContainerList }>
                        <Link className={ cls.serviceContainerListItem } to={ '/' }>
                            Оплата
                        </Link>
                    </li>
                    <li className={ cls.serviceContainerList }>
                        <Link className={ cls.serviceContainerListItem } to={ '/' }>
                            Доставка
                        </Link>
                    </li>
                    <li className={ cls.serviceContainerList }>
                        <Link className={ cls.serviceContainerListItem } to={ '/' }>
                            Возврат
                        </Link>
                    </li>
                    <li className={ cls.serviceContainerList }>
                        <Link className={ cls.serviceContainerListItem } to={ '/' }>
                            Помощь
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={ cls.contactContainer }>
                <p className={ cls.contactContainerTel }>+7 965 172 05 81 </p>
                <p className={ cls.contactContainerEmail }>sinotova91@mail.ru </p>
            </div>
        </div>
    )
}