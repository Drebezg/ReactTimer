var webpack = require('webpack');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, "node_modules"],
		alias: {
			Main: 'app/components/Main.jsx',
			applicationStyles: 'app/styles/app.scss',
			Navigation: 'app/components/Navigation.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			Controls: 'app/components/Controls.jsx'
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
				//default  - del all from ? and uncomment
				// query: {
				// 	presets: ['react', 'es2015', 'stage-0']
				// },
				exclude: /(node_modules|bower_components)/,
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};
