# vue3-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### axios封装需要考虑到的几个问题(采用配置的方式  )
```
  1、post的参数序列问题
  2、取消重复请求
  3、Loading
  4、各种HTTP状态
  5、填写token
  6、接口返回来的数据时候需要简洁（response.data : response）
  7、后台返回来的code
```