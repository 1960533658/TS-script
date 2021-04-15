/**
 * ! 公共修饰符
 * ! 在TS中，成员都是默认标记为public，可以理解为公开，所以我们可以自由访问程序里面定义的成员，当然我们也可以显示的标记出来
 * 
 * 
 * ! 私有修饰符
 * ! 我们可以把类中的成员标记为private， 可以理解为私有的。
 * ! 一旦成员标记为private我们就不能在外部访问它。并且且在派生类中也是不能访问的
 * 
 * ! 受保护的修饰符
 * ! protected,可以理解为受保护的，和private相似，有一点不同的就是，protected成员可以在派生类中可以访问eScript中类的继承也和ES6中的相似，拍成类可以从基类中继承属性和方法
 * 
 */
// 公共修饰符
class Man{
  public name: string;
  public constructor(msg: string) {
    this.name = msg;
  }
}

// 私有修饰符
class Women {
  private name: string;
  constructor(msg: string) {
    this.name = msg
  }
}
// new Women("Jerry").name// 错误： “name是私有的，不能被外部访问”

// 受保护的修饰符
class Game{
  protected name: string;
  constructor(msg: string) {
    this.name = msg;
  }
}
class Hubdou extends Game {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  show() {
    return this.name;
  }
}
let xiaohong = new Game("sandna");
// xiaohong.name; //属性“name”受保护，只能在类“Game”及其子类中访问
let xiaolan = new Hubdou("sandan2")
// xiaolan.name; //属性“name”受保护，只能在类“Game”及其子类中访问

/**
 *  ! readonly修饰符
 *  ! 我们可以键readonly键成员设置为只读，制度属性必须在声明是或构造函数里被初始化
 */
class Day {
  readonly has: string;
  constructor(msg: string) {
    this.has = msg
  }
}
let yst = new Day("月亮");
// yst.has = "sds" // 无法分配到 "has" ，因为它是只读属性

/**
 * ! 存取器
 * 
 */
class Ani {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  
  public get getAge() : number {
    return this.age;
  }
  
  public set setAge(age: number) {
    this.age = age;
  }
}

class Mou extends Ani {
  name: string;

  constructor(name: string) {
    super(1)
    this.name = name
  }

  dadong() {
    console.log("打动");
  }
}
let ershu = new Mou("Jerry");
ershu.dadong();
console.log(ershu.getAge);
ershu.setAge = 20;
console.log(ershu.getAge);

