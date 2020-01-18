const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    "editor.main": 'monaco-editor/esm/vs/editor/editor.main',
    // Package each language's worker and give these filenames in `getWorkerUrl`
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker',
    "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
    "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    globalObject: 'self',
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'monaco'),
    publicPath: "/monaco/"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ]
};