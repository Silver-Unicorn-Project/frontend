import React, { Component } from 'react'
import Slider from 'react-slick'
import leftSliderArrow from '../../../shared/assets/icons/leftSliderArrow.png'
import rightSliderArrow from '../../../shared/assets/icons/rightSliderArrow.png'
import cls from './BrandsSlider.module.scss'
import BucasImg from '../../../shared/assets/brands/Bucas.png'
import EquilineImg from '../../../shared/assets/brands/Equiline.png'
import EskadronImg from '../../../shared/assets/brands/Eskadron.png'
import PikeurImg from '../../../shared/assets/brands/Pikeur.png'
import VeredusImg from '../../../shared/assets/brands/Veredus.png'
import CalevoImg from '../../../shared/assets/brands/Calevo.png'
import RoecklImg from '../../../shared/assets/brands/Roeckl.png'
import UvexImg from '../../../shared/assets/brands/Uvex.png'
import HaasImg from '../../../shared/assets/brands/HAAS.png'
import SprengerImg from '../../../shared/assets/brands/Sprenger.png'
import CavalloImg from '../../../shared/assets/brands/Cavallo.png'
import SamshieldImg from '../../../shared/assets/brands/Samshield.png'
import StubbenImg from '../../../shared/assets/brands/Stubben.png'
import EltImg from '../../../shared/assets/brands/ELT.png'
import WintecImg from '../../../shared/assets/brands/Wintec.png'

const mockBrands = [
    BucasImg,
    EquilineImg,
    EskadronImg,
    PikeurImg,
    VeredusImg,
    CalevoImg,
    RoecklImg,
    UvexImg,
    HaasImg,
    SprengerImg,
    CavalloImg,
    SamshieldImg,
    StubbenImg,
    EltImg,
    WintecImg
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

export default class BrandsSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: 'linear',
            nextArrow: <CustomNextArrow/>,
            prevArrow: <CustomPrevArrow/>
        }
        return (
            <div className={ cls.sliderContainer }>
                <Slider { ...settings }>
                    { mockBrands.map( ( brand, index ) => (
                        <div className={ cls.brandCard } key={ index }>
                            <img className={ cls.brandCardImg } src={ brand } alt="brand"/>
                        </div>
                    ) ) }
                </Slider>
            </div>
        )
    }
}