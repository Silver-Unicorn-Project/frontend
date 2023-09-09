import { MouseEventHandler, useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [
    boolean,
    UseHoverBind
]

type CustomMouseEventHandler = MouseEventHandler<HTMLImageElement> | boolean

export const useHover = () => {
    const [ isHover, setIsHover ] = useState( false )

    const onMouseEnter: CustomMouseEventHandler = useCallback( () => {
        setIsHover( true )
    }, [] )
    const onMouseLeave: CustomMouseEventHandler = useCallback( () => {
        setIsHover( false )
    }, [] )

    return useMemo( () => [
        isHover,
        onMouseEnter,
        onMouseLeave
    ] as const, [ isHover, onMouseEnter, onMouseLeave ] )
}
