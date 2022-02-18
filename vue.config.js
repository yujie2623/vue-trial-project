// import webpack from "webpack"
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 9528 // dev port
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  
  configureWebpack: {
    name: "vue-trial-project",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  chainWebpack(config){
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

  }
}