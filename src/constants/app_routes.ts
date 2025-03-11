const StoreRoutes = Object.freeze({
    products: '/store/products',
    cart: '/store/cart',
    checkout: '/store/checkout',
    order_tracking: '/store/order-tracking',

    category_products: (id: string) => `/store/categories/${id}/products`,
})

const WebsiteRoutes = Object.freeze({
    home: '/',
    services: '/services',
    service_category: '/services/:slug',
    about: '/about',
    contact: '/contact',
})


export const AppRoutes = Object.freeze({
    store: StoreRoutes,
    website: WebsiteRoutes
})