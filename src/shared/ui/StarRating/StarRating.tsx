import React, { memo, useState } from 'react'
import cls from './StarRating.module.scss'
import { classNames } from '../../lib/classNames/ClassNames'
import Star from '../../assets/icons/Star.svg'
import { Icon } from '../Icon/Icon'

interface StarRatingProps {
    className?: string
    onSelect?: ( starCount: number ) => void
    size?: number
    selectedStars?: number
}

const stars = [ 1, 2, 3, 4, 5 ]

export const StarRating = memo( ( props: StarRatingProps ) => {
    const { className, selectedStars = 0, onSelect, size = 24 } = props
    const [ currentStarsCount, setCurrentStarsCount ] = useState( selectedStars )
    const [ isSelectedStars, setIsSelectedStars ] = useState( Boolean( selectedStars ) )

    const onHover = ( starsCount: number ) => () => {
        if ( !isSelectedStars ) {
            setCurrentStarsCount( starsCount )
        }
    }

    const onLeave = () => {
        if ( !isSelectedStars ) {
            setCurrentStarsCount( 0 )
        }
    }

    const onClick = ( starsCount: number ) => () => {
        if ( !isSelectedStars ) {
            onSelect?.( starsCount )
            setCurrentStarsCount( starsCount )
            setIsSelectedStars( true )
        }
    }

    return (
        <div className={ classNames( cls.StarRating, {}, [ className ] ) }>
            { stars.map( ( starNum, index ) => (
                <Icon
                    Svg={ Star }
                    key={ starNum }
                    className={
                        classNames(
                            cls.starIcon,
                            { [ cls.selected ]: isSelectedStars },
                            [ currentStarsCount >= starNum ? cls.hovered : cls.normal ]
                        )
                    }
                    width={ size }
                    height={ size }
                    onMouseLeave={ onLeave }
                    onMouseEnter={ onHover( starNum ) }
                    onClick={ onClick( starNum ) }
                    data-selected={ currentStarsCount >= starNum }
                />
            ) ) }
        </div>
    )
} )
