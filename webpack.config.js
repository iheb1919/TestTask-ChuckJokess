const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_module/,
            use: 'babel-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader','sass-loader'],
         },
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
]
   },
   resolve: {
      extensions:["*",".js",".jsx"],

   },
   
   plugins: [
      new HtmlWebPackPlugin({
         template:'public/index.html',
        // filename: 'index.html'
      })
   ]
};