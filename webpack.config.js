// webpack.config.js -> module.rules
{
    'test': /\.styl(us)?$/,
    'use': [
        'vue-style-loader',
        'css-loader',
        'stylus-loader'
    ]
}