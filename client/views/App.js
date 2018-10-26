import React from 'react'; //    eslint-disable-line
import { hot } from 'react-hot-loader';//   eslint-disable-line 
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';// 解决个页面title等seo标签
import Grid from './grid/index';
import Home from './home/index';

const App = () => (
<div>
    <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.2/antd.min.css" />
    </Helmet>
    <Route path="/" component={Home} exact />
    <Route path="/grid" component={Grid} exact />
</div>
);


export default hot(module)(App);
