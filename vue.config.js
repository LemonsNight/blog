/**
 * @Author: Daiyousei
 * @Date: 2022-06-04 00:36:49
 * @LastEditTime: 2022-06-13 00:37:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: \vue-daiyousei-blog\vue.config.js
 * @来自Daiyousei的代码编辑
 */
const IS_PROD = ['production'].includes(process.env.NODE_ENV);
const externals = {
  vue: 'Vue',
};
const cdn = {
  js: ['https://cdn.jsdelivr.net/npm/vue@2.6.11'],
};
module.exports = {
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.externals = externals;
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        if (IS_PROD) {
          args[0].cdn = cdn;
        }
        return args;
      });
  },
};
