/**
 * 类装饰器
 * 类装饰器再类声明致歉绑定(紧靠类声明)
 * 类装饰器可以用来监视,修改或替换类定义
 * 在执行类装饰器的时候,会把类作为唯一的参数传递给装饰器
 * 如果类装饰器返回一个新的类,它会用心的类替换原有的类的定义
 */

// 替换类
function demo5(str: string) {
  return function bb(target: any) {
    return class nn {
      name: string
      age: number
      constructor() {
        this.name = "";
        this.age = 1
      }
    }
  }
}
@demo5("12")
class kkk {
  name: string
  constructor(name: string) {
    this.name = name
  }
}