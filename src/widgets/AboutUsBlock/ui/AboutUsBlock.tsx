import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './AboutUsBlock.module.scss'
import React from 'react'
import aboutUsPhoto from '../../../shared/assets/icons/aboutUsPhoto.png'

interface AboutUsBlockProps {
    className?: string;
}

export const AboutUsBlock = ( { className }: AboutUsBlockProps ) => {

    return (
        <div className={ classNames( cls.aboutUsContainer, {}, [ className ] ) }>
            <div className={ cls.aboutUsBlock }>
                <h3 className={ cls.header }>О нас</h3>
                <p className={ cls.text }>
                    Написать историю: как появился магазин,
                    сколько лет работает, сколько клиентов, –
                    всё, что хочешь рассказать
                </p>
            </div>
            <img src={ aboutUsPhoto } alt="О нас" className={ cls.img }/>
        </div>
    )
}