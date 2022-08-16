const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/pages/Home/index.js',
      template: './src/pages/Home/index.html',
      title: 'Главная',
      meta: {
        description: 'Главная страница TRY COFFEE'
      },
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'card': {
      entry: './src/pages/CardPage/index.js',
      template: './src/pages/CardPage/index.html',
      title: 'Рецепт',
      meta: {
        description: 'Страница рецепта приготовления кофе'
      },
      chunks: [ 'chunk-vendors', 'chunk-common', 'card' ]
    },
    'method': {
      entry: './src/pages/MethodPage/index.js',
      template: './src/pages/MethodPage/index.html',
      title: 'Метод',
      meta: {
        description: 'Страница метода приготовления кофе'
      },
      chunks: [ 'chunk-vendors', 'chunk-common', 'method' ]
    }
  },
});

