import React, { FC } from 'react';
import Slider from 'react-slick';
import cls from './CustomSlider.module.scss'
import leftSliderArrow from '../../../shared/assets/icons/leftSliderArrow.png';
import rightSliderArrow from '../../../shared/assets/icons/rightSliderArrow.png';
import CustomSliderArrow from '../CustomSliderArrow/CustomSliderArrow';

export const CustomSlider:FC = ({children}) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <CustomSliderArrow arrowTypeProp={rightSliderArrow}/>,
    prevArrow: <CustomSliderArrow arrowTypeProp={leftSliderArrow}/>
  }

  return(
    <div className={ cls.sliderContainer }>
      <Slider { ...settings }>
        {children}
      </Slider>
    </div>
  )
}