# 简单的企业级Jira后台事务管理系统


## 一些在开发工作中遇到的问题的解法应用

搜索框发送请求过于频繁？
- 自定义 Hook useDebounce 减少发送频率

useDebounce 返回 any 类型不够精准？
- 用泛型判断传入类型

需要将用户信息在多个组件间共享？
- 用 useContext 挂载用户信息
 
页面初始加载没有loading体验不好？
- 用 React 实验特性：Suspense
 
异步请求代码繁琐处理 error 和 loading 复杂？
- 用 useAsync 自定义Hook抽象代码




