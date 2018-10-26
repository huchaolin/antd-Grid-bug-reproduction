# antd-Grid-bug-reproduction  
这是一个antd3.10版本后，栅格系统在服务端渲染后报错的bug再现demo， 推断为更换的新contextAPI不支持在服务端渲染， 3.9版本的antd不存在此问题  
#git clone  
#npm run dev-client  
#npm run-dev-server  
#访问localhost:2222即为服务端渲染页面， 前端调试页面接口为localhost:8888  
#开发过程中dev-client启动后， 再启动dev-server， 两个都要启动  
