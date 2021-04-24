/**
 * & TS中的模块化（有的时候可以在前端中，也有的时候用在mode中）
 * es6模块化
 * commonJS模块化
 * 
 * ts中的模块化，需要兼容rs6的模块化和commonJS模块化
 * node最新都是支持es6模块化的 es6 moudels
 * 
 * 1.ES6模块化
 * ES6出席那之前，TS不像其他语言拥有模块化这一概念，于是为了支持JS模块化
 * 我们使用类，立即执行函数或者第三方插件（RequireTS，seaJS）来实现模块化
 * 但是在ES6出现之后，在上述解决方案已经被抛弃，因为ES6中正式引入来模块化的概念
 * 
 * ES6模块化和NodeJS中一样， 一个文件就是一个模块，模块中的数据都是私有的
 * ES6模块化可以通过对应的关键字暴露模块中的数据，可以通过对应的关键字使用模块中暴露的数据
 * 
 * 
 * Node中 实现的是commonJS规范
 * 导入 关键字 = require（路径
 * 导出： moudle。exports = {ke： value，key: vlaue}
 * module。exports = func（） {}
 * 分开导入和导出
 * export xxx
 * import { xxx } from "patj"
 */

import { add, minus } from "./02.分开导入导出"
add(1, 2)
minus(2, 3)

import { add2, minus2 } from "./03.一次性导入和导出"
add2(2, 3);
minus2(23, 12)

// 默认导入导出
//  export default xxx
// import xxx from "path"
// & 注意： 一个模块只能使用一次默认导出，多次无效
// 默认导出时，导入的名称可以和导出的名称不一样

import defaultFn from "./04.默认导入和导出";

console.log(defaultFn.minus3(12,2))
