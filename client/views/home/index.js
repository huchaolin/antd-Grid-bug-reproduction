import React, { Component } from 'react'; //eslint-disable-line
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import Helmet from 'react-helmet';// 解决个页面title等seo标签

@inject('appState')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  // 无关代码， 服务端渲染先执行以下异步操作，等返回结果后再返回给前端编译后的html
  bootstrap() {
    return new Promise(((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3;
        resolve(true);
      }, 100)
    }))
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
        <Helmet>
          <title>首页title</title>
          <meta name="description" content="首页 meta标签" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.2/antd.min.css" />
        </Helmet>
        <div>首页， 此页使用的BUTTON样式被加载，查看网页源码，服务端返回的是正确编译后的html, 刷新后能再次正常显示</div>
        <Button type="primary" ghost onClick={() => this.props.history.push('/grid')}>跳转至栅格页</Button>
      </div>
    )
  }
}
export default Home;
