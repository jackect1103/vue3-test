
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  chainWebpack: config => {
    config.module
      .rule('scss')
      .test(/\.scss$/)
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 37.5 })
      .end();
    config.resolve.alias
      .set('@', resolve('src'))
  }
}

