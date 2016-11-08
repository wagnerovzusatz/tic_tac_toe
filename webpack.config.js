var
	path = require("path"),
	webpack = require("webpack");

module.exports = {
	entry: {
		bundle: "entry.jsx",
		test: "mocha!test.js"
	},
	output: {
		path: path.join(__dirname, "release"),
		filename: "[name].js"
	},

	externals: {
		'jsdom': 'window',
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/addons': true,
		'react/lib/ReactContext': 'window'
	},

	module: {
		loaders: [
			{
				test: /\.sass$/,
				loader: "style!css!sass?indentedSyntax"
			},
			{
				test: /\.html/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
    ]
	},
	resolve: {
		modulesDirectories: [
      "node_modules", "source", "test"
    ],
		extensions: [
      "", ".js", ".json", ".jsx", ".min.js"
    ]
	}
};