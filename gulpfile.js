'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    rq = require('run-sequence'),
    devConf = require('./webpack.config.dev.js'),
    deployConf = require('./webpack.config.js');

//开发环境执行任务:启动react服务器
gulp.task('dev', function() {
    var webpack = require('webpack'),
        WebpackDevServer = require('webpack-dev-server'),
        host = devConf.serverCfg.host,
        port = devConf.serverCfg.port;
    //实例化一个webpack资源服务器
    new WebpackDevServer(webpack(devConf), {
        publicPath: devConf.output.publicPath,
        hot: true,
        noInfo: false,
        historyApiFallback: true
    }).listen(port, host, function(err) {
        if (err) {
            gutil.log(err);
        }
        gutil.log('Listening at ' + host + ':' + port);
    });

});

//清空输出目录
gulp.task('clean', function() {
    var output = deployConf.output.path, //输出目录
        clean = require('gulp-clean');
    return gulp.src(output, {
        read: false
    }).pipe(clean());
});

//发布打包
gulp.task('pack', function(done) {
    webpack(deployConf, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true
        }));
        done();
    });
});

//js压缩
gulp.task('uglify', function() {
    var output = deployConf.output.path, //输出目录
        uglify = require('gulp-uglify');
    return gulp.src(output + '/*.js').pipe(uglify()).pipe(gulp.dest(
        output));
});

//CSS压缩
gulp.task('minify-css', function() {
    var output = deployConf.output.path, //输出目录
        minifyCSS = require('gulp-minify-css');
    return gulp.src(output + '/*.css').pipe(minifyCSS({
        compatibility: 'ie8'
    })).pipe(gulp.dest(
        output));
});

//发布构建
gulp.task('build', function(cb) {
    rq('clean', 'pack', ['uglify', 'minify-css'], cb);
});


//TODO 发布
gulp.task('deploy', ['build'], function() {});
