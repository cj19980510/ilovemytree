
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/user', {
        target: 'http://10.31.163.29:9083',
        changeOrigin: true

    }))
    app.use(proxy('/order', {
        target: 'http://10.31.163.29:9084',
        changeOrigin: true
    }))
    app.use(proxy(
        '/homepage', {
        target: 'http://10.31.163.29:9081',
        changeOrigin: true
    }))
    app.use(proxy(
        '/dream', {
        target: 'http://10.31.163.29:9082',
        changeOrigin: true
    }))
    // app.use(proxy(
    //     '/user', {
    //     target: 'http://10.31.163.29:9083',
    //     changeOrigin: true
    // }))
    // app.use(proxy(
    //     '/order', {
    //     target: 'http://10.31.163.29:9084',
    //     changeOrigin: true
    // }))
}
