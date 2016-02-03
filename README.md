# mui-react
> 使用react重构公司移动端组件（原组件采用dojo框架编写）

## 开发及构建

### 目录结构

```
├── package.json
├── dist                    # 构建目录
├── component               # 组件目录
├── app                    	# 应用（开发实验）目录
├── resource                # 资源目录（css、字体等）
├── gulp.js                 # gulp配置文件
├── webpack.config.dev.js   # webpack配置文件（开发用）
└── webpack.config.js       # webpack配置文件（生产用）

```

### 开发

使用之前先安装相关依赖：

```
npm install gulp -g && npm install
```
- 构建
  ```
  npm run build
  ```
  
  （在dist目录下会生成对应的js和css）
  
- 样例
  ```
  npm run dev
  ```
  
  （访问localhost:3000/app/index.html）
  
## TODO

- 重构其他组件
- 组件DIY
