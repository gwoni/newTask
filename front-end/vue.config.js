const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../' + 'src/main/resources/static'),
  indexPath: path.resolve(__dirname, '../' + 'src/main/resources/static/index.html'),
  devServer: {
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
        'bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  }
}
