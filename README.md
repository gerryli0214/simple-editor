# simple-editor

## webpack5 + vue3 + ts框架搭建问题记录

1. `webpack-dev-server`

   - `vue-loader v16.0+`
   - `vue-template-compiler`改为`@vue/compiler-sfc`

2. 无法识别`.ts`文件
   - `webpack resolve.extensions`加上`.ts`文件查找，因为`webpack`默认只查找`['.js', '.json']`
