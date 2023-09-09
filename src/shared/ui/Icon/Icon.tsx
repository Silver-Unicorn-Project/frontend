import React, { memo } from 'react'
import cls from './Icon.module.scss'
import { classNames } from 'shared/lib/classNames/ClassNames'


interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo( ( props: IconProps ) => {
    const { className, width, height, Svg, ...otherProps } = props
    return (
        <Svg
            className={ classNames( cls.Icon, {}, [ className ] ) }
            width={ width }
            height={ height }
            onClick={ undefined }
            { ...otherProps }
        />
    )
} )
