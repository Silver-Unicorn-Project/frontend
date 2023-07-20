import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  return <div className={classNames(cls.Sidebar, {}, [className])}></div>;
};
