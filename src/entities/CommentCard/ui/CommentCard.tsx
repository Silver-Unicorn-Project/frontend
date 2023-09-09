import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './CommentCard.module.scss'
import { StarRating } from 'shared/ui/StarRating'

interface CommentCardProps {
    className?: string;
    text?: string;
    userName?: string;
    stars?: number;
}

export const CommentCard = ( props: CommentCardProps ) => {
    const { className, text, userName, stars } = props

    return (
        <div className={ classNames( cls.commentCardContainer, {}, [ className ] ) }>
            <h3 className={ cls.userName }>{ userName }</h3>
            <StarRating selectedStars={ stars } className={ cls.stars }/>
            <p className={ cls.commentText }>{ text }</p>
        </div>
    )
}