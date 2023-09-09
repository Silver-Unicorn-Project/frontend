export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    CATALOG = 'catalog',
    NEWS = 'news',
    TRASH = 'trash',
    DELIVERY = 'delivery',
    PAYMENT = 'payment',
    FAVORITES = 'favorites',
    CART = 'cart',
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteDelivery = () => '/delivery'
export const getRoutePayment = () => '/payment'
export const getRouteCatalog = () => '/catalog'
export const getRouteFavorites = () => '/favorites'
export const getRouteCart = () => '/cart'
export const getRouteNews = () => '/news'
export const getRouteTrash = () => '/trash'
