const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');

const serverRender = require('./util/server-render');

const app = express();

app.use(bodyParser.json());// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded

app.use(function(error, req, res, next) {
    console.log(error)
    res.status(500).send(error)
});

const isDev = process.env.NODE_ENV == 'development';

//指定标签栏图标
app.use(favicon(path.join(__dirname, '../favicon.ico')))

if (!isDev) {
    //正式环境的服务端渲染
    const serverBundle = require('../dist/server-entry');
    const fs = require('fs');
    const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf-8');
    app.use('/public', express.static(path.join(__dirname, '../dist')));//指定静态文件的返回
    app.get('*', function (req, res, next) {
        serverRender(serverBundle, template, req, res)
        .catch(next);
    });
} else {
    //开发环境下的服务端渲染
    const devStatic = require('./util/dev-static');
    devStatic(app);
};
app.listen(2222, function () {
    console.log('server is listening on 2222')
});
