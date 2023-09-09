import React, { type HTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Card.module.scss'
import { classNames } from '../../lib/classNames/ClassNames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    max?: boolean
}

export const Card = memo( ( props: CardProps ) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    return (
        <div
            className={ classNames( cls.Card, {}, [ className ] ) } { ...otherProps }>
            { children }
        </div>
    )
} )
