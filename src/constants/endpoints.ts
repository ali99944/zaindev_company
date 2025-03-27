const ApiEndpoints = Object.freeze({
    services: {
        all: '/services',
        byId: (id: number) => `/services/${id}`,
    },
    articles: {
        all: '/blogs',
        byId: (id: number) => `/blogs/${id}`,
    },
})

export default ApiEndpoints