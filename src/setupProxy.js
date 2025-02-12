const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000/api',
      changeOrigin: true,
      secure: false,
      onProxyReq: (proxyReq, req, res) => {
        // Для debugging
        console.log('Original URL:', req.url);
        console.log('Proxy URL:', proxyReq.path);
      },
      router: {
        // Явно вказуємо маршрут
        '127.0.0.1:3000': 'http://127.0.0.1:8000/api',
      },
      
    })
  );
};