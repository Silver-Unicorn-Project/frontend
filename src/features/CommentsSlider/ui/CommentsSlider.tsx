import React, { Component } from 'react'
import Slider from 'react-slick'
import leftSliderArrow from '../../../shared/assets/icons/leftSliderArrow.png'
import rightSliderArrow from '../../../shared/assets/icons/rightSliderArrow.png'
import cls from './CommentsSlider.module.scss'
import { CommentCard } from 'entities/CommentCard'

const mockComments = [
    {
        id: 1,
        userName: 'Вероника',
        stars: 5,
        text: 'Спасибо большое за попону! Быстро оформили продажу \n' +
            'и редкость для Почты России быстрая доставка. Очень рада, \n' +
            'что обратилась именно к Вам. \n' +
            'С удовольствием буду продолжать покупать в этом магазине. Спасибо Вам, за Вашу работу!'
    },
    {
        id: 2,
        userName: 'Анастасия',
        stars: 5,
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 3,
        userName: 'Анна',
        stars: 3,
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 4,
        userName: 'Николай',
        stars: 4,
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        id: 5,
        userName: 'Алексей',
        stars: 5,
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            ' et dolore magna aliqua. Ut enim ad minim veniam, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    }
]

function CustomNextArrow( props: any ) {
    const { className, style, onClick } = props
    return (
        <img
            src={ rightSliderArrow }
            className={ `${ className } ${ cls.rightArrow }` }
            style={ {
                ...style,
                display: 'block',
                position: 'absolute',
                right: '-50px',
                width: '22px',
                height: '22px'
            } }
            onClick={ onClick }
        />
    )
}

function CustomPrevArrow( props: any ) {
    const { className, style, onClick } = props
    return (
        <img
            className={ `${ className } ${ cls.leftArrow }` }
            style={ {
                ...style,
                display: 'block',
                position: 'absolute',
                left: '-50px',
                width: '22px',
                height: '22px'
            } }
            src={ leftSliderArrow }
            onClick={ onClick }
        />
    )
}

export default class CommentsSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            cssEase: 'linear',
            nextArrow: <CustomNextArrow/>,
            prevArrow: <CustomPrevArrow/>
        }
        return (
            <div className={ cls.sliderContainer }>
                <Slider { ...settings }>
                    { mockComments.map( ( comments, index ) => (
                        <div key={ index }>
                            <CommentCard
                                key={ comments.id }
                                userName={ comments.userName }
                                stars={ comments.stars }
                                text={ comments.text }
                            />
                        </div>
                    ) ) }
                </Slider>
            </div>
        )
    }
}