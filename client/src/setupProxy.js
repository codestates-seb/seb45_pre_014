const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "localhost:3000/api",
        createProxyMiddleWare ({
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    )
};