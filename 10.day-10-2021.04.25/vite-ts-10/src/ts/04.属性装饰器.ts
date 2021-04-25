/**
 * & 属性装饰器
 * * 属性装饰器卸载一个属性声明之前
 * * 属性装饰器表达式会在运行时当作函数被调用,传入两个参数
 * * - 对于静态属性来说就是当前的类,对于实例属性来说就是当前的实例对象
 * * - 成员的名字
 */

function test3(target: any, propertyName: string) {
  console.log(target, propertyName);
  target.name = "sdasdsadsad"
  target.ccc = 125418561
  console.log(target);
  
}

class Person3 {
  @test3
  name: string
  static age: number
  constructor() {
    this.name = "ss"
  }
  static sayHi() {
    console.log(23333);
    
  }
}

let dadaa = new Person3()
console.log(dadaa.name);
