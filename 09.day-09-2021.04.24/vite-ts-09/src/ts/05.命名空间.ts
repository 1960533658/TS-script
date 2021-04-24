/**
 * ? 什么是命名空间
 * 命名空间可以看作是一个微型模块
 * 当我们想把相关的业务代买卸载一起，又不想污染全局空间的时候，我们就可以使用命名空间
 * 其本质解释定义一个大对象，把变量/方法/类/接口...都放在里面
 * 
 * 2.命名空间和模块的区别
 * * 在程序内部使用的代码，可以使用命名空间封装防止全局污染
 * * 在程序外部使用的代码可以使用模块封装放置全局污染（一个ts文件就是一个模块）
 * * 总的来讲：大部分情况下，使用模块就可以，尤其是前端开发中
 */

namespace validation {
  const nameRegexp = /^[a-zA-Z]+$/
  export const test = (value: string) => {
    return nameRegexp.test(value)
  }
}

validation.test('aaa')
/// <reference path="./05.命名空间.ts" />
/// 三斜线指令
