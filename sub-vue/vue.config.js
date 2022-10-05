const { defineConfig } = require("@vue/cli-service");
const packageName = require("./package.json").name;
const port = 9002;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port, headers: { "Access-Control-Allow-Origin": "*" } },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
      // jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
});
