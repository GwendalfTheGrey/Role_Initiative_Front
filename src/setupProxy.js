const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api/*",
        createProxyMiddleware({
            target: "bvkdwalzcdu54em8zei7-mysql.services.clever-cloud.com",
            secure: false,
        })
    );
};