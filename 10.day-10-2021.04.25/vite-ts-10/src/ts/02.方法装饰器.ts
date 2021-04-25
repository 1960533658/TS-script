/**
 * & 方法装饰器
 * - 方法装饰器写在一个方法的声明之前
 * - 方法装饰器可以用来监视,修改或者替换方法定义
 * 
 * - 方法装饰器表达式会在运行时当作函数被调用,传入下列三个参数
 * * 对于静态方法而言就是当前的类,对于实例方法而言就是当前实例
 * * 被绑顶顶方法的名字
 * * 被绑定方法的属性描述符
 * 
 * * target 对于静态方法而言就是当前的类 对于实例方法而言就是实例
 * * propertykey: 被绑定方法的名字
 * * desriptor 被绑定方法的属性描述符
 */

function test(target: any, propertykey: string, desriptor: PropertyDescriptor) {
  console.log(target); // 类class Person 或者实例Person
  console.log(propertykey); // sayHello 装饰方法
  console.log(desriptor); // 


  // 替换装饰器中的方法
  desriptor.value = function () {
    console.log("替换sayHello方法");
    
  }
}

class Person {
  @test
  sayHello() {
    console.log("你好 TS");
  }
  static sayAge() {
    console.log("我今年成年了");
    
  }
}

let zs = new Person();
zs.sayHello()