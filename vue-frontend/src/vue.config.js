module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: 'static', to: '.' }]
      })
    ]
  }
}
