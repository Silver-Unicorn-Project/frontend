import React from 'react'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <AppRouter/>
        </div>
    )
}
