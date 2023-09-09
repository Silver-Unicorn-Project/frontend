import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './NavbarHeader.module.scss'
import { Link } from 'react-router-dom'
import VK_logo from '../../../shared/assets/icons/VK_logo.svg'
import TG_logo from '../../../shared/assets/icons/TG_logo.svg'
import { Icon } from 'shared/ui/Icon/Icon'

interface NavbarHeaderProps {
    className?: string;
}


export const NavbarHeader: FC<NavbarHeaderProps> = ( { className } ) => {

    return (
        <div className={ classNames( cls.navbarHeader, {}, [ className ] ) }>
            <ul className={ cls.links }>
                <Link className={ cls.link } to={ '/delivery' }>
                    Доставка
                </Link>
                <Link className={ cls.link } to={ '/payment' }>
                    Оплата
                </Link>
                <Link className={ cls.link } to={ '/' }>
                    Помощь
                </Link>
                <Link className={ cls.link } to={ '/' }>
                    Контакты
                </Link>
            </ul>
            <div className={ cls.contacts }>
                <a href="https://vk.com/sereb_edinorog" target="_blank" rel="noreferrer">
                    <Icon
                        Svg={ VK_logo }
                        className={ cls.logo }
                    />
                </a>
                <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                    <Icon
                        Svg={ TG_logo }
                        className={ cls.logo }
                    />
                </a>
                <div className={ cls.tel }>
                    +7 965 172 05 81
                </div>
            </div>
        </div>
    )
}