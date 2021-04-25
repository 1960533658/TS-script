/**
 * & 访问器装饰器
 * 
 * * 访问器装饰器声明在一个访问器的声明之前
 * * 访问器装饰器应用在访问器装饰器的属性描述符并且可以用来监听\修改或替换一个访问器装饰器的定义
 * * 访问器装饰器表达式会在运行时当作函数被调用,传入下列三个参数
 * * - 对于静态成员来说时类的构造函数,对于实例成员是类的原形对象
 * * - 成员名称
 * * - 成员的属性描述符
 * 
 * & 注意:
 * * TS不允许同时装饰一个成员的get和set港闻其
 * * 取而代之的是 一个成员的所有装饰器必须在文档顺序的第一个访问器上
 * 
 * 
 */

function test2(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
    desriptor.set = () => {
      target.MyName  = "sss"
    }
    desriptor.get = function () {
      return target.name+ "aaaa"
    }
  }
  


class Person2 {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  @test2
  public get _name(): string {
    return this.name
  }

  public set _name(v: string) {
    this.name = v
  }
}

let dsds = new Person2("zs")
console.log(dsds._name);
