import React, { FC } from 'react'
import { NavbarHeader } from '../../../features/NavbarHeader'
import { NavbarBody } from '../../../features/NavbarBody'

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ( { className } ) => {
    return (
        <>
            <NavbarHeader/>
            <NavbarBody/>
        </>
    )
}
