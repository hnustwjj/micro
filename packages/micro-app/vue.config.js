const { defineConfig } = require("@vue/cli-service");
const port = 9005;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port },
  configureWebpack: {
    output: {
      libraryTarget: "umd",
      library: "test",
    },
  },
});
