module.exports = {
  devServer: {
    port: 6800, // 配置端口
    open: true
  },
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "@C": "@/components",
        "@V": "@/views",
        "@S": "@/scss",
        "@A": "@/assets"
      }
    }
  }
};
