const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'src','react','mau.js'),
	output:{
		path : path.resolve(__dirname,'src','public','js'),
		filename : 'convertido.js'
	},
	module: {
		rules: [
			{
        test: /\.css$/,	
				use: [
					'style-loader',
					'css-loader',
				]
			},
			{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
					/*options: {
						presets: ['@babel/preset-env']
					}*/
				}
			},
      {
        test: /\.(jpg|png)$/,
				use: [
          {
            loader: 'url-loader',
            options: {
							limit: 8192
            },
          },
        ],
			}
    ],
	}
}