'use strict';

var path = require('path'),
    webpack = require('webpack'),
    host = 'localhost',
    port = 3000;

var entryBase = [
        'webpack-dev-server/client?http://' + host + ':' + port, // WebpackDevServer host and port
        'webpack/hot/only-dev-server'
    ],
    entries = {};
entries['mui-react'] = entryBase.concat('./component/MUIReact.jsx');
entries['mui-demo'] = entryBase.concat('./demo/app.jsx');

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'demo'), //打包文件存放的绝对路径
        filename: '[name]-bundle.js', //打包后的文件名
        publicPath: '/demo', //网站运行时的访问bundle.js路径
        library: 'MUIReact', //全局命名空间
        libraryTarget: 'umd' //wrapper方式
    },
    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }, {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }],
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, //css Loader
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, //sass Loader
            {
                test: /\.png$/,
                loader: 'url-loader?mimetype=image/png'
            }, // url Loader
            {
                test: /\.jsx$/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015'
            }, //babel Loader
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, //babel Loader
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'react-hot'
            } //react-hot Loader

        ]
    },
    resolve: {
        alias: {
            resource: path.join(__dirname, 'resource/'),
            css: path.join(__dirname, 'resource/css/default'),
            component: path.join(__dirname, 'component')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    serverCfg: {
        host: host,
        port: port
    }
};
