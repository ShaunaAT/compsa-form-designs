module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://cwcx0z4ffe.execute-api.us-east-1.amazonaws.com/Prod/:path*",
            },
        ]
    },
}