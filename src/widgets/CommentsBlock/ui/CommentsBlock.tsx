import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './CommentsBlock.module.scss'
import React from 'react'
import BorderLine from 'shared/assets/icons/border_line.svg'
import CommentsSlider from 'features/CommentsSlider'
import { Icon } from 'shared/ui/Icon/Icon'

interface CommentsBlockProps {
    className?: string;
}

export const CommentsBlock = ( { className }: CommentsBlockProps ) => {

    return (
        <div className={ classNames( cls.brandsContainer, {}, [ className ] ) }>
            <div className={ cls.headerContainer }>
                <p className={ cls.headerText }>Отзывы</p>
                <Icon Svg={ BorderLine } className={ cls.headerBoarderLine }/>
            </div>
            <CommentsSlider/>
        </div>
    )
}