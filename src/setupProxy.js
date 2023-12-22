const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api/*",
        createProxyMiddleware({
            target: "https://role-initiative-back.vercel.app",
            secure: false,
        })
    );
};