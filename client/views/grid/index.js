import React, { Component } from 'react'; //eslint-disable-line
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';// 解决个页面title等seo标签
import { Row, Col } from 'antd';


@inject('appState')
@observer
class Grid extends Component {
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
      <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        <Helmet>
          <title>服务端渲染出BUG的栅格页title</title>
          <meta name="description" content="话题列表页 meta标签" />
        </Helmet>
        <div>该页为服务端渲染时出BUG的栅格页</div>
      <div style={{
        textAlign: 'left', fontSize: '1.3rem', display: 'inline-block', width: '60%',
      }}
      >
        <div>1.查看网页源码会发现TypeError: Cannot read property gutter of undefined</div>
        <div>2.即服务端渲染时 栅格并未被正常渲染出来</div>
        <div>
          {
          `
          3.刷新页面，即出现报错, 根据服务端的报错信息定位报错信息位置，发现gutter = _ref.gutter中gutter没有设置初始值， 给gutter设置初始值{}后， 服务端渲染正常， 或者把antd版本降级为3.9也能解决该问题
          `
          }
        </div>
        <div>4.推断是栅格系统在3.10版本中使用的新的contextAPI导致的不支持服务端渲染， 请修复</div>
      </div>
      <Row type="flex" justify="space-betwwen" gutter={8}>
        <Col style={{ background: 'gray' }} span={6}>
          <div style={{ background: 'rgba(0, 160, 233, 0.7' }}>1</div>
        </Col>
        <Col style={{ background: 'gray' }} span={6}>
         <div style={{ background: 'rgba(0, 160, 233, 0.7' }}>2</div>
        </Col>
        <Col style={{ background: 'gray' }} span={6}>
          <div style={{ background: 'rgba(0, 160, 233, 0.7' }}>3</div>
        </Col>
        <Col style={{ background: 'gray' }} span={6}>
          <div style={{ background: 'rgba(0, 160, 233, 0.7' }}>4</div>
        </Col>
      </Row>
      </div>
    )
  }
}
export default Grid;
