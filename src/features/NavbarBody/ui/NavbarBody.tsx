import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './NavbarBody.module.scss'
import Logo from '../../../shared/assets/icons/LogoNavbar.png'
import { Link } from 'react-router-dom'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input, ThemeInput } from 'shared/ui/Input/Input'
import SearchLoop from '../../../shared/assets/icons/SearchLoop.png'
import PersAcc from '../../../shared/assets/icons/PersAcc.svg'
import Selected from '../../../shared/assets/icons/Selected.svg'
import Cart from '../../../shared/assets/icons/Cart.svg'
import CartFilled from '../../../shared/assets/icons/Cart_filled.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { useHover } from 'shared/lib/hooks/useHover'


interface NavbarBodyProps {
    className?: string;
}

export const NavbarBody: FC<NavbarBodyProps> = ( { className } ) => {
    const [ isHover, onMouseEnter, onMouseLeave ] = useHover()
    const cartImg = isHover ? CartFilled : Cart
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth', // Add smooth scroll behavior
        } )
    }

    return (
        <div className={ classNames( cls.navbarBody, {}, [ className ] ) }>
            <Link to={ '/' } className={ cls.link }>
                <img src={ Logo } alt="Logo" className={ cls.logo } onClick={ scrollToTop }/>
            </Link>
            <Link to={ '/catalog' }>
                <Button theme={ ThemeButton.ClEAR } className={ cls.catalogueBtn }>
                    Каталог
                </Button>
            </Link>
            <div className={ cls.searchBlockContainer }>
                <div className={ cls.searchContainer }>
                    <Input theme={ ThemeInput.SEARCH } className={ cls.searchInput } placeholder="Поиск"/>
                </div>
                <Button theme={ ThemeButton.ClEAR } className={ cls.searchBtn }>
                    <img src={ SearchLoop } alt="SearchLoop" className={ cls.loop }/>
                </Button>
            </div>
            <div className={ cls.authContainer }>
                <Link to={ '/' } className={ cls.authContainerBtn }>
                    <Icon
                        Svg={ PersAcc }
                        className={ cls.icons }
                        width={ '18px' }
                        height={ '18px' }
                    />
                    <p className={ cls.authContainerParagraph }>
                        Войти
                    </p>
                </Link>
                <Link to={ '/favorites' } className={ cls.authContainerBtn }>
                    <Icon
                        Svg={ Selected }
                        className={ cls.icons }
                        width={ '20px' }
                        height={ '18px' }
                    />
                    <p className={ cls.authContainerParagraph }>
                        Избранное
                    </p>
                </Link>
                {/*<div className={ cls.authContainerBtn }>*/ }
                {/*    <Link to={ '/cart' } className={ cls.authContainerBtn }>*/ }
                {/*        <div onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } className={ cls.wrapper }>*/ }
                {/*            <Icon*/ }
                {/*                Svg={ cartImg }*/ }
                {/*                className={ cls.icons }*/ }
                {/*                width={ '18px' }*/ }
                {/*                height={ '18px' }*/ }
                {/*            />*/ }
                {/*        </div>*/ }
                {/*        <p className={ cls.authContainerParagraph }>*/ }
                {/*            Корзина*/ }
                {/*        </p>*/ }
                {/*    </Link>*/ }
                {/*</div>*/ }
                <Link to={ '/cart' } className={ cls.authContainerBtn }>
                    <Icon
                        Svg={ cartImg }
                        className={ cls.icons }
                        width={ '18px' }
                        height={ '18px' }
                    />
                    <p className={ cls.authContainerParagraph }>
                        Корзина
                    </p>
                </Link>
            </div>
        </div>
    )
}