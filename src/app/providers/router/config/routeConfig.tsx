import {
    AppRoutes,
    getRouteAbout,
    getRouteCart,
    getRouteCatalog,
    getRouteDelivery,
    getRouteFavorites,
    getRouteMain,
    getRouteNews,
    getRoutePayment,
    getRouteTrash
} from 'shared/consts/router'
import { AppRouteProps } from 'shared/types/routerUserRoles'
import { AboutPage } from 'pages/AboutPage'
import { CatalogPage } from 'pages/CatalogPage'
import { NewsPage } from 'pages/NewsPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { TrashPage } from 'pages/TrashPage'
import MainPage from 'pages/MainPage/ui/MainPage'
import React from 'react'
import { DeliveryPage } from 'pages/DeliveryPage'
import { PaymentPage } from 'pages/PaymentPage'
import { FavoritesPage } from 'pages/FavoritesPage'
import { CartPage } from 'pages/CartPage'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [ AppRoutes.MAIN ]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [ AppRoutes.ABOUT ]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [ AppRoutes.DELIVERY ]: {
        path: getRouteDelivery(),
        element: <DeliveryPage/>
    },
    [ AppRoutes.FAVORITES ]: {
        path: getRouteFavorites(),
        element: <FavoritesPage/>
    },
    [ AppRoutes.CART ]: {
        path: getRouteCart(),
        element: <CartPage/>
    },
    [ AppRoutes.PAYMENT ]: {
        path: getRoutePayment(),
        element: <PaymentPage/>
    },
    [ AppRoutes.CATALOG ]: {
        path: getRouteCatalog(),
        element: <CatalogPage/>
    },
    [ AppRoutes.NEWS ]: {
        path: getRouteNews(),
        element: <NewsPage/>
    },
    [ AppRoutes.TRASH ]: {
        path: getRouteTrash(),
        element: <TrashPage/>
    },
    [ AppRoutes.NOT_FOUND ]: {
        path: '*',
        element: <NotFoundPage/>
    }

}