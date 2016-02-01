var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    host = 'localhost',
    port = 3000;

module.exports = {
    entry: [
        './component/MUIReact.jsx' //打包的入口文件
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'), //打包文件存放的绝对路径
        filename: 'mui-react.js', //打包后的文件名
        publicPath: '/', //网站运行时的访问路径
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
    },{
        './React':{
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
    },{
        './ReactDOM':{
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }],
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // }, //css Loader
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader',
                    'css-loader!sass-loader')
            }, //sass Loader
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015'
            }, //babel Loader
            {
                test: /\.js$/,
                loader: 'babel'
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
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('mui-react.css')
    ],
    serverCfg: {
        host: host,
        port: port
    }
};
