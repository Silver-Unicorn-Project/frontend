import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Navbar.module.scss';
import logo from 'shared/assets/icons/Logo.svg';
import trash from 'shared/assets/icons/ph_shopping-bag-thin.svg';
import avatar from 'shared/assets/icons/ph_user.svg';
import heart from 'shared/assets/icons/ph_heart-fill.svg';
import { Input, ThemeInput } from 'shared/ui/Input/Input';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.container}>
        <div className={cls.headerTop}>
          <Link to={'/'}>
            <img className={cls.logo} src={logo} alt="logo" />
          </Link>
          <ul>
            <Link className={cls.link} to={'/catalog'}>
              Каталог
            </Link>
            <Link className={cls.link} to={'/about'}>
              О нас
            </Link>
            <Link className={cls.link} to={'/news'}>
              Новости
            </Link>
          </ul>
          <div className={cls.nav_right}>
            <Link to={'/'}>
              <img className={cls.heartImg} src={heart} alt="logo" />
            </Link>
            <Link to={'/trash'}>
              <img src={trash} alt="logo" />
            </Link>
            <Link to={'/user'}>
              <img src={avatar} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className={cls.headerBottom}>
        <div className={cls.container}>
          <div className={cls.bottomFlex}>
            <Input theme={ThemeInput.SEARCH} placeholder={'Поиск'} />
          </div>
        </div>
      </div>
    </div>
  );
};
