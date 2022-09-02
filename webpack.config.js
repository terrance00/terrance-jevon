const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const prod = !!env.production;
  const buildPath = `${__dirname}/docs`;

  const htmlPlugin = new HtmlWebpackPlugin({
    minify: prod,
    inject: true,
    base: prod ? '/terrance-jevon/' : '/',
    template: 'index.html'
  });

  return {
    mode: prod ? 'production' : 'development',
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
