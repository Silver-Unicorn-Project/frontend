import {
    AppRoutes,
    getRouteAbout,
    getRouteCatalog,
    getRouteMain,
    getRouteNews,
    getRouteTrash
} from "shared/consts/router";
import {AppRouteProps} from "shared/types/routerUserRoles";
import {AboutPage} from "pages/AboutPage";
import {CatalogPage} from "pages/CatalogPage";
import {NewsPage} from "pages/NewsPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {TrashPage} from "pages/TrashPage";
import MainPage from "pages/MainPage/ui/MainPage";
import React from "react";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.CATALOG]: {
        path: getRouteCatalog(),
        element: <CatalogPage/>
    },
    [AppRoutes.NEWS]: {
        path: getRouteNews(),
        element: <NewsPage/>
    },
    [AppRoutes.TRASH]: {
        path: getRouteTrash(),
        element: <TrashPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage/>
    }

}