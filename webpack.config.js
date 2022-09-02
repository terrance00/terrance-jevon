const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const buildPath = `${__dirname}/docs`;

  const htmlPlugin = new HtmlWebpackPlugin({
    minify: true,
    inject: true,
    base: '/',
    template: 'index.html'
  });

  return {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: buildPath
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
          },
          use: 'ts-loader'
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [htmlPlugin]
  };
};
