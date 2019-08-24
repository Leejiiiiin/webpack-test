const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css/, //.css파일이 리턴되면 (ture)면 밑에꺼 실행
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}