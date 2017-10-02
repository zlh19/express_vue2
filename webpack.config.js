var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");


//定义了一些文件夹的路径
// var ROOT_PATH = path.resolve();
var APP_PATH = path.resolve(__dirname, 'src/main.ts');
var BUILD_PATH = path.resolve(__dirname, 'build');

var plugins = [
	//压缩js 
	// new webpack.optimize.UglifyJsPlugin({
 //    // minimize: true,
 //    sourceMap: true
 //  }),
	//提供用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
	//将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true
  }),
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  //入口文件 main.js
  entry: {
    build : APP_PATH
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    // 指向异步加载的路径
    publicPath : '/',
    // 非主文件的命名规则
    chunkFilename: '[chunkhash].[id].build.js?[chunkhash]'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?sourceMap'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|ttf)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  vue: {
    css: ExtractTextPlugin.extract("css"),
    sass: ExtractTextPlugin.extract("css!sass-loader")
  },
  resolve: {
    extensions: ['','.ts','.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/build/vue.esm.js'
    }
  },
  babel: {
    // 告诉babel你要解析的语言
    presets: ['es2015']
  },
  plugins: plugins
};
