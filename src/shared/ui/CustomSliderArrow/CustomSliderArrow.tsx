import React from 'react';
import cls from './CustomSliderArrow.module.scss';

interface SliderProps {
  className?: string;
  style?: React.CSSProperties;
  arrowTypeProp: string;
  onClick?: () => void;
}

export const CustomSliderArrow = (props: SliderProps) => {
  const { className, style, arrowTypeProp, onClick } = props;

  return (
      <img
          className={ `${ className } ${ cls.arrowStyle }` }
          style={{
            ...style,
            display: 'block',
            position: 'absolute',
            width: '22px',
            height: '22px'
          }}
          src={ arrowTypeProp }
          onClick={ onClick }
      />
  )
}

export default CustomSliderArrow;