const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://openlibrary.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    })
  );
};
