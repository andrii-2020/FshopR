const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shpapi-production.up.railway.app/api',
      changeOrigin: true,
      secure: false,
      onProxyReq: (proxyReq, req, res) => {
      },
      router: {
        '127.0.0.1:3000': 'https://shpapi-production.up.railway.app/api',
      },
      
    })
  );
};