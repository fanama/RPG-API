module.exports = {
    env: {
        ACCESS_TOKEN_SECRET: 'secret',
        PORT: 3004,
        BASE_API: 'http://localhost:3000',
        LOGIN_API: 'http://localhost:3002',
    },
    async rewrites() {
        return [
            {
                source: '/login/:path*',
                destination: 'http://localhost:3003/:path*',
            },
            {
                source: '/api/:path*',
                destination: 'http://localhost:3002/:path*',
            },
        ]
    },
}
