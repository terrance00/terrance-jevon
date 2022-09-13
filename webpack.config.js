const CopyPlugin = require('copy-webpack-plugin');
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

  const copy = new CopyPlugin({
    patterns: [
      {
        from: './src/assets/adff9f9d19f8523eaa31c4bfd513913f.jpg',
        to: 'assets/'
      },
      {
        from: 'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
        to: __dirname + '/docs/js/[name][ext]'
      },
      {
        from: 'src/assets/logos/',
        to: __dirname + '/docs/assets/logos/[name][ext]'
      }
    ]
  });

  const devTool = !prod
    ? {
        devtool: 'inline-source-map'
      }
    : {};

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
    plugins: [htmlPlugin, copy],
    ...devTool
  };
};
