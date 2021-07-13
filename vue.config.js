// vue.config.js
module.exports = {
    publicPath: '/', // npm run build 之后的资源路径默认 ‘/’,
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://rmt.alpactech.com:7325/api/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': '/'  // rewrite path
                }
            },

        }
    },

};
