const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/apim',
        createProxyMiddleware({
            target: 'https://shpapi-production.up.railway.app',
            changeOrigin: true,
        })
    );
};