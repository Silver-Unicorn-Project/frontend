import React, {memo, Suspense, useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NewsPage } from 'pages/NewsPage';
import { TrashPage } from 'pages/TrashPage';
import { CatalogPage } from 'pages/CatalogPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import {AppRouteProps} from "shared/types/routerUserRoles";
import {routeConfig} from "app/providers/router/config/routeConfig";

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )
        return <Route
            key={route.path}
            path={route.path}
            //Add RequireAuth when user authorization would be implemented
            //element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            element={element}
        />
    }, [])
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)
