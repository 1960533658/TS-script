/**
 * & 参数装饰器
 * * 参数装饰器卸载一个参数声明之前
 * * 参数装饰器表达式会在运行时当作函数被调用,传入下列三个参数
 * * - 对于静态成员来说是当前的类,对于实例成员来说是当时的实例
 * * - 参数所在的方法名称
 * * - 参数在参数实例中的索引
 */

function test4(target: any, fnName: string, index: number) {
  console.log(target, fnName, index);
}

class Person4 {
  sayHello(name: string, @test4 age: number) {
    console.log(`我叫${name}, 我今年${age}`);
    
  }
}