/**
 * & 什么是装饰器
 * ! Decorator 是ES7的信誉发，目前正处于田中
 * ! 装饰器实际上就是一个函数，在使用时前面加上@符号,写在要装饰器同时作用在一个声明时，可以写一行或换行写
 * ! 装饰器是一种特殊类型的声明,他能被附加到类\方法\访问器\属性或参数上
 * ! 本添加到不同地方的装饰器有不同的名称和特点
 * 
 * * 附加到类上,类装饰器
 * * 附加到方法上,方法装饰器
 * * 附加到访问器上,访问器装饰器
 * * 附加到属性上,属性装饰器
 * * 附加到参数上,参数装饰器
 */


function add() { }
/**
 * 2. 装饰器的基本格式
 * ! 普通装饰器: @add
 * ! 装饰器工厂: @add(传参数)
 * ! 装饰器组合: @add @add1()
 */

/**
 * ? 如何在ts中使用装饰器
 * 在ts中需要手动打开配置
 * 修改设置配置文件 experimentalDecorators 为true
 */

function demo(target: any) {
  console.log(target)
  target.prototype.age = 10
  target.prototype.study = function () {
    console.log("学习");
  }
  console.log(new CC("aaa"));
  
}
// 装饰器的作用就是给cc添加了一个方法
// 但是并没有对cc做任何侵入式的改变
@demo
class CC {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
let aa = new CC("sss")
console.log(aa);


// 给Person类绑定一个装饰工厂
// 在绑定的时候由于函数后面加上了() 所以先会执行装饰器工厂拿到真正的装饰器
// 真正的装饰器会在定义之前执行,所以紧接着又执行类里面
function demo1(color: string) {
  return function (target: any) {
    console.log(target);
    console.log(111);
  }
}
@demo1("red")
class CC1 {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// 3.普通的装饰器可以和装饰器工厂结合起来一起使用
// 结合起来的时候,回显崇尚直线的执行又所有的装饰器工厂,拿到所哟有真正的装饰器
// 然后再从下至上的执行所哟有的装饰器
function test2(target: any) {
  console.log("我是普通装饰器");
}
function demo2(str: string) {
  console.log("我是装饰器工厂")
  return function (target: any) {
    console.log("我是装饰器工厂中的字符串");
  }
}
@test2
@demo2("12")
class CC2 {}