var path = require('path')

module.exports = {
 entry: './src/Chart.ts',
 devtool: 'source-map',
 output: {
	 path: path.resolve( __dirname, 'dist' ),
	 library: 'Chart',
   filename: 'schart.js'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: ['.ts']
 },
};
