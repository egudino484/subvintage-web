const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Define el alias '@' para apuntar al directorio 'src'
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",

});