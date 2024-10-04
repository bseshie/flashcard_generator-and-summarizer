const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api', // This is the endpoint to be proxied
        createProxyMiddleware({
            target: 'https://ai-api.amalitech-dev.net/api/v1',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Removes "/api" from the request path
            },
        })
    );
};