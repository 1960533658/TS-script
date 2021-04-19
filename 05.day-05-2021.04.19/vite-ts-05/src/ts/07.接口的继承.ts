/**
 * * 和类一样,接口也能继承其他接口.这相当于复制接口的所有成员.接口的关键字也是extends来继承
 * ! 一个interface可以同时多个interface,实现多个接口成员的合并.
 * ! 使用逗号隔开要继承的接口
 * ! 需要注意的是,尽管支持继承多个接口, 但是如果继承的接口中,定义的同名属性的类型不同的或是不能编译通过的
 * ! 如果现在有一个类实现了Suare接口,也需要是实现square的方法,实现接口使用implements关键字
 */

interface whiteInterface {
  color: string
}

interface ageInterface {
  age: number
}

interface categoryInterface {
  category: string
}

// 继承多个接口
interface carInterface extends whiteInterface, ageInterface, categoryInterface {
  run(): void
}

class Cat implements carInterface {
  color: string;
  age: number;
  category: string;
  constructor() {
    this.color = "白色"
    this.age = 3
    this.category = "橘猫"
  }
  run() {
    console.log(`${this.color}的${this.category},今年${this.age}岁了`)
  }
}

let jumao = new Cat()
jumao.run()