# UATP

强集成前端项目模板

## Main

主框架：[uniapp(vue3) => 一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。](https://uniapp.dcloud.net.cn/)

自动引入：[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

状态管理：[Pinia => Pinia 是 Vue 的存储库](https://pinia.web3doc.top/introduction.html)

构建工具：[Vite => 下一代前端开发与构建工具](https://vitejs.cn/)

CSS：[Sass => 一种 CSS 的预编译语言](https://www.sasscss.com/documentation),[Unocss => 即时按需的原子化 css 引擎](https://unocss.dev/)

PostCSS：[一个用 JavaScript 工具和插件转换 CSS 代码的工具](https://www.postcss.com.cn/)

- [postcss-px-to-viewport-8-plugin => 将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin)

- [postcss-preset-env => 允许您将现代 CSS 转换为大多数浏览器 可以理解，根据您的目标确定您需要的填充物 浏览器或运行时环境。](https://github.com/csstools/postcss-preset-env)

国际化：[Vue-i18n => Vue 国际化插件](https://vue-i18n.intlify.dev/)

- 配置地址：src/locales

组件库：

- 移动端 [uView](https://vkuviewdoc.fsq.pub/guide/demo.html)
- [unplugin-vue-components => 让你不用手动引入组件，但是对于 vant 的函数式组件仍然需要手动](https://github.com/antfu/unplugin-vue-components)

工具集：

- [@vueuse/core => 基于 Vue 组合式 API 的实用工具集](https://www.vueusejs.com/)
- [lodash](https://lodash.com/)

## 开发辅助

代码规范：`ESLint、Prettier、Stylelint`，该模板由`vite-plugin-checker`提供控制台及 vite overlay 的规范报错提示。

提交规范：`Lint-staged、Husky、Commitizen、Commitlint、Changelog`

版本规范：

- `standard-version` => 处理版本迭代提交
- `@plugin-web-update-notification/vite` => 版本升级后弹窗告诉用户

**`.cz-config.js`配置提交交互**

IDE(建议使用 VSCODE)规范：`.editorconfig`

调试工具

- vite-plugin-vue-devtools => 一个旨在增强 Vue 开发者体验的 Vite 插件
- vite-plugin-progress => 一个打包进度条

## 环境配置

支持 dev、prod 三种环境

## 工具包

### request => axios 封装

### hooks

### utils

- crypto 加密解密
- storage 缓存处理
- typeof 类型识别
- treeHelper 树形转换
- number 数字转换
- pattern 策略模式

### mock

## 接口配置

配置地址：src/service

## 打包

打包建议使用Hbuilder的常规打包方式（目前还没探究到这一块）

## 测试

- [vitest => 单元测试](https://cn.vitest.dev/config/)
