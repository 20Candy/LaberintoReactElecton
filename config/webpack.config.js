module.exports = {
  entry: './src/App.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]'
        }
      }
    ]
  }
};




