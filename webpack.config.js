const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		port: 3000,
	},
	context: path.resolve(__dirname, 'src'),
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: '[path][hash][ext][query]',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.mp4$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/i,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			inject: true,
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
