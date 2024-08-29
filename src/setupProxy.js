const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://oauthc.iccflifeskills.com.ng',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/v0.1/api/admin',
            },
        })
    );
};
