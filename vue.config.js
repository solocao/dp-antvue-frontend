const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const mapjson = require('src/views/dp/firstdp/map/chinamaincity')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new BundleAnalyzerPlugin()
    ],
    externals: {
      'vue': 'Vue',
      'ant-design-vue': 'antd'
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
          'font-size-base': '13px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // https: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        ws: false,
        changeOrigin: true
      },
      '/gateway': {
        target: 'https://www.easy-mock.com/mock/5b7bce071f130e5b7fe8cd7d/antd-pro',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': '/api'
        }
      },
      '/GW': {
        target: 'https://61.153.144.212:8403/GW.WIR',
        // target: 'http://192.168.0.135:7777/GW.WIR',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/GW': ''
        }
      },
      '/video': {
        target: 'http://115.236.28.77:55554/',
        // target: 'http://192.168.1.107:8080/GW.WIR',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/video': ''
        }
      },
      '/viptz': {
        target: 'http://115.236.28.77:55555/',
        // target: 'http://192.168.1.107:8080/GW.WIR',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/viptz': ''
        }
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
}
