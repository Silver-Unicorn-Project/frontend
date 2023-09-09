import React from 'react'
import { App } from 'app/App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'


const container = document.getElementById( 'root' )

if ( !container ) {
    throw new Error( 'Container root not found' )
}

const root = createRoot( container )
root.render(
    <StoreProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreProvider>
)
