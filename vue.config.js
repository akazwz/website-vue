module.exports = {
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/v1': {
        target: 'http://localhost:8000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/v1': ''
        }
      }
    }
  }
}
