import React, { Component } from 'react';
import Slider from 'react-slick';
/* import cls from './ProductSlider.module.scss'; */
import leftSliderArrow from '../../../shared/assets/icons/leftSliderArrow.png';
import rightSliderArrow from '../../../shared/assets/icons/rightSliderArrow.png';
import img1 from '../../../shared/assets/mockImg/img1.png';
import { DiscountCard } from 'entities/DiscountCard';
import {CustomSlider} from '../../../shared/ui/CustomSlider/CustomSlider'

const mockBrands = [
  {
      id: '1',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '2',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '3',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '4',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '5',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '6',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '7',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },
  {
      id: '8',
      description: 'Попона "Cotton Waffle"',
      imageUrl: String( img1 ),
      oldPrice: '9500 р.',
      newPrice: '7500 р.',
  },

]

export const ProductSlider = () => {
  return (
    <CustomSlider>
      { mockBrands.map( ( card ) => (
        <DiscountCard
          key={ card.id }
          description={ card.description }
          imageUrl={ card.imageUrl }
          oldPrice={ card.oldPrice }
          newPrice={ card.newPrice }
        />
      ))}
    </CustomSlider>
  )
}