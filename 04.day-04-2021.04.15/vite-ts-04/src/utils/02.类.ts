/**
 * ! JavaScript语言中，生成实例对象的传统方法是通过构造函数
 * ! 这种写法跟传统面向对象啊你个语言（比如C++和Java差异很大，很容易让学习这门语言的程序原感到困惑。
 * ! ES6提供了更接近传统语言的写法，引入了Class类这个概念，作为对象的模板。通过class关键字，可以定义咋TS种，同样使用类来创建对象
 */

class Person {
  // 属性
  name: string;
  // 构造函数
  constructor(msg: string) {
    this.name = msg
  };
  // 方法
  study(): void {
    console.log(`${this.name}爱学习`);
    
  }
}

// 通过类来实例化对象
let padd = new Person("刘某人")
console.log(padd.name);
console.log(padd.study());

