const path = require('path');

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ]
            }
          }
        ]
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 1234,
    open: false,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
}
