```
.
├── .gitlab gitlab相关的文件
├── build 编译出来的文档页面
├── lib babel之后的src和对应的type definition文件
├── docs
│   ├── develop 开发文档
│   └── help 帮助文档
├── src 源代码
│   ├── types TypeScript 声明文件
│   ├── styles 样式
│   ├── assets 资源
│   │   └── icons 自定义图标
└── test 测试用例
```

npm包追溯
| 包名                                     	| 用途                                             	|
|------------------------------------------	|--------------------------------------------------	|
| @babel/cli                               	| babel7的cli，支持npm script里面直接调用babel     	|
| @babel/core                              	| babel7的核心组件                                 	|
| @babel/plugin-proposal-optional-chaining 	| babel插件 转optional chaining的写法              	|
| @bable/plugin-transform-proto-to-assign  	| babel插件 转proto                                	|
| @babel/plugin-transform-runtime          	| babel插件                                        	|
| @babel/preset-env                        	| babel preset env                                 	|
| @babel/preset-react                      	| babel preset react                               	|
| @babel/preset-typescript                 	| babel preset typescript                          	|
| @types/enzyme                            	| enzyme类型定义                                   	|
| @types/jest                              	| jest类型定义                                     	|
| @types/react                             	| react类型定义                                    	|
| @types/react-dom                         	| react-dom类型定义                                	|
| @typescript-eslint/eslint-plugin         	| 代码风格检查                                     	|
| @typescript-eslint/parser                	| 代码风格检查                                     	|
| babel-loader                             	| webpack babel-loader                             	|
| babel-plugin-lodash                      	| babel插件 lodash                                 	|
| babel-plugin-transform-dev               	| babel插件 transform-dev                          	|
| babel-preset-rsuite                      	| babel preset rsuite                              	|
| core-js                                 	| polyfill                                      	|
| cross-env                                	| 跨平台设置环境变量                               	|
| css-loader                               	| webpack css-loader                               	|
| cz-conventional-changelog                	| git-cz规范化代码提交                             	|
| enzyme                                   	| 为React设计的Js测试库                            	|
| enzyme-adapter-react-16                  	| enzyme的react16适配器                            	|
| eslint                                   	| 代码风格检查                                     	|
| eslint-config-prettier                   	| 代码风格检查                                     	|
| eslint-import-resolver-typescript        	| 代码风格检查                                     	|
| eslint-import-resolver-webpack           	| 代码风格检查                                     	|
| eslint-plugin-import                     	| 代码风格检查                                     	|
| eslint-plugin-jsx-a11y                   	| 代码风格检查                                     	|
| eslint-plugin-prettier                   	| 代码风格检查                                     	|
| eslint-plugin-react                      	| 代码风格检查                                     	|
| eslint-plugin-react-hooks                	| 代码风格检查                                     	|
| file-loader                              	| webpack 文件的loader（作为url-loader的fallback） 	|
| fork-ts-checker-webpack-plugin           	| webpack 检查ts类型错误                           	|
| html-webpack-plugin                      	| webpack html插件                                 	|
| husky                                    	| 管理git hooks的包                                	|
| jest                                     	| js测试框架                                       	|
| less                                     	| css预处理器                                      	|
| less-loader                              	| webpack less-loader                              	|
| mini-css-extract-plugin                  	| webpack 多个css文件放到一块儿                    	|
| ncp                                      	| 跨平台 递归cp                                    	|
| prettier                                 	| 代码格式化                                       	|
| react                                    	| react框架                                        	|
| react-dom                                	| react框架的一部分                                	|
| react-hot-loader                         	| babel插件 react-hot-loader实时更新               	|
| react-test-renderer                      	| jest用来做snaptest用到的                         	|
| regenerator-runtime                      	| polyfill                                      	|
| rimraf                                   	| 跨平台删除文件/目录                              	|
| rsuite                                   	| 基于react一套UI库                                	|
| stylelint                                	| css样式lint                                      	|
| stylelint-config-standard                	| css样式lint的一个标准的配置                      	|
| ts-jest                                  	| 涵盖了ts类型检查的jest                           	|
| typescript                               	| javascript超集，支持静态类型                     	|
| uglifyjs-webpack-plugin                  	| webpack插件，让js变得读不懂                      	|
| url-loader                               	| webpack插件，支持webpack打包资源文件             	|
| webpack                                  	| webpack                                          	|
| webpack-cli                              	| webpack命令行                                    	|
| webpack-dev-server                       	| webpack开发server                                	|