'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    //https://www.easy-mock.com/mock/5c3481b05ee07b0e226214fa/example
    //http://39.96.75.124:8080/HuiJu-1.0-SNAPSHOT/login?userName=user&userPassword=123456
    // Paths
    //https://www.easy-mock.com/mock/5c34910a571e3a78765765f9/example/detail_img_article
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/apig": {
        target: "http://47.93.27.243/huiju",
        changeOrigin: true,
        pathRewrite: {
          "^/apig": ""
        },
      },
      "/apiw": {
        target: "https://www.easy-mock.com",
        changeOrigin: true,
        pathRewrite: {
          "^/apiw": ""
        },
      },
      "/apin": {
        target: "https://www.easy-mock.com",
        changeOrigin: true,
        pathRewrite: {
          "^/apin": ""
        }
      },
    //https://www.easy-mock.com/mock/5c36e81c96e17359c184e2f8/huiju/shop/viewphoto
    	"/api":{
    		target:"https://www.easy-mock.com",
    		changeOrigin:true,
    		pathRewrite:{
    			"^/api":""
    		}
    	}
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
