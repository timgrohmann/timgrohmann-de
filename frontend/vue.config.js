module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Tim Grohmann';
        return args;
      });
  },
  transpileDependencies: [
    'vuetify'
  ],
}
