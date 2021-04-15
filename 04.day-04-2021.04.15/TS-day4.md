# TS-day-04

## 函数类型

### 函数-定义
> TS也可以通过函数声明和函数和函数表达式进行函数的定义
```ts
// * 函数式声明
function sum(a: number, b: number) { return a + b; }

// * 函数表达式
let sum2 = function(a: number, b: number) { return a + b; }

// * 箭头函数
let sum3 = (a: number, b: number) a + b;

```

### 函数-可选参数
> 在TS函数中制定了参数后，在调用的时候就必须传入相应个数的参数
> 在JS中函数的参数是可选的，如果在调用函数的时候没有指定函数的参数的话，这个参数就是undefined
> 在TS中我们可以指定参数为可选，这样我们在调用函数的时候就可以选择性传参了

```ts
function sum(a: number, b? : number) {
  retrun a +b; // 错误， b可能是undefined
}

sum(1,3)
sum(1)

/**
 * & 注意:
 * * 设置了可选参数之后可以不传递可选参数的参数，但是当设置了可选参数之后也可能会导致  b无法按照自己设想中的那样使用，因为 不传参 或未 设置默认值 的时候就是  undefined 
 */
```

### 函数类型-参数默认值
> 和JS一样我们同样可以给TS设置默认值,但是带有默认的参数一定要在有参数的后面定义

```ts
function sum5(a: number, b: number = 6) {
  return a +b;
}

console.log(1,4) // 5
console.log(1) // 7
```

### 函数类型-rest参数

> rest参数就是剩余的参数,指除了真正的新参之外的所有传递过来的参数
```ts
function sum6(a: number, ...rest[]) {
  let num: number = 0;
  for (let i = 0; i < rest.length; i++) {
    num+=rest[i];
  }
  let avg = (num + avg) / (rest.length + 1);
  return avg;
}
console.log(sum6(22, 20, 20, 20, 20, 20, 20))
```

## 类

### 类-概念以及语法
> JS中,生成实例对象的传统方法是通过构造函数
> 这种写法跟传统的面向对象语言(比如C++和JAVA)差异很大,很容易让新学习这门语言的程序员感到困惑.
> ES6提供了更接近传统语言的写法, 引进了Class(类) 这个概念,作为兑现的模板.通过class关键字,可以定义类
> 类的语法:
> > `class 类名(大写) {基类属性名: 属性定型; constructor(形参: 定型) {this.属性名 = 形参}; 方法名(): 返回值类型 {代码块}}`


```ts
class Person {
  // 属性 
  name: string;
  // 构造函数
  constructor(msg: string) {
    this.name = msg
  };

  study(): void {
    console.log(`${this.name}爱学习`);
  }

  // 通过类来实例化对象
  let padd = new Person("刘某人");
  console.log(padd.name);
  console.log(padd.study());
}


/**
 * & 注意:
 * * 只能通过constructor构造函数来设置属性
 */
```
### 类-继承

> TS中类的继承也和ES6中相似,派生类(字类)可以从基类(父类)中继承属性和方法
> 语法
> > `class 派生类名(首字母大写) extends 基类名 {派生类属性名: 定型; constructor(形参: 定型) {this.基类属性 = 形参}; 方法名() : 返回值类型 {代码块}}` 


```ts
// 基类
class Animal {
  age: number; 
  constructor(age: number) {
    this.age = age;
  };
  eat(): void {
    console.log("吃嘛嘛香");
  }
}
// 派生类
class Mouse extends Animal {
  name: string;
  constructor(name: string) {
    super(1)
    this.name = name;
  }

  dadonmg() {
    console.log(`${this.name}会打洞`)
  }
}
// 实例化对象
let Jerry = new Mouse("Jerry");
Jerry.dadonmg();
Jerry.eat();
console.log(Jerry.name);

/**
 * & 注意:
 * ! TS中的super,是指派生类(字类)继承了基类(父类)属性和方法,而如果想要利用父类中的方法则需要在父类中使用super
 * * 派生类的构造函数中必须包含super
 */
```

## 修饰符

### 修饰符-公共修饰符
> 在TS中,成员都是默认为public,可以理解为公开,所以我们可以自由访问程序类面定义的成员,但让我们也可以现实的标记出来

```ts
clss Man {
  public name: string;
  public constructor(msg: tring) {
    this.name = msg;
  }
}

/**
 * & 注意:
 * * 在默认的情况下public是默认的,可以不写
 */
```

### 修饰符-私有修饰符
> 我们可以把类中的成员标记为private, 可以理解为私有的
> 一旦成员被标记为private我们就不能在外部随意访问它.并且在派生类中也是不能访问的

```ts
class Women {
  private name: string;
  constructor(msg: string) {
    this.name = msg;
  }
}
new Women("Jerry").name; // 错误: "name是私有的.,能被外部访问"
```

### 修饰符-受保护的修饰符
> protected,可以理解为受保护的,和private相似,有一点不同的是,protected成员可以在派生类(字类)中访问
```ts
class Game {
  protected name: string;
  constorctor(msg: string) {
    this.name = msg;
  }
}
class hd extends Game {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  show() {
    return this.name;
  }
}
let red = new Game("sdsds")
// xiaohong.name; //属性“name”受保护，只能在类“Game”及其子类中访问
let blue = new hd("sdsdsd");
// xiaolan.name; //属性“name”受保护，只能在类“Game”及其子类中访问
```

### 修饰符-只读修饰符
> 我们可以使用readonly将成员设置为只读,只读属性必须在声明时或构造函数里被初始化
```ts
class Day {
  readonly has: string;
  constructor(msg: string) {
    this.has = msg;
  }
}
let yst = new Day("月亮");
yst.has = "sds" // 无法分配到 "has" ，因为它是只读属性
```

## 类

### 类-存取器
> 在TS中,我们可以利用存取器来帮助我们有效的控制对于兑现的成员的访问

```ts
class Ani {
  pricate age: number;
  constructor(age: number) {
    this.age = age;
  }
  public get getAge(): number {
    return this.age;
  };
  public set setAge(age: number) {
    this.age = age;
  }
}
class Mou extends Ani {
  name: string;
  constructor(name: string) {
    super(1);
    this.name = name;
  }
}
let ershu = new Mou("Jerry");
ershu.setAge = 20;
console.log(ershu.getAge)

/**
 * & 注意
 * * 存取器只有get没有set的话存取器自动推断为readonly
 */
```

### 类-静态成员
> TS的静态睡醒和JS中的静态属性是类似的,我们创建的静态成员, 这些属性在`类的本身`而`不是在类的实例上`
```ts
class Man {
    static player: string = "运动员";
    show() {
        return "我职业：" + Man.player
    }
}
let man = new Man();
man.player; //错误，player是静态成员
Man.player; // 运动员
man.show(); // 我职业：运动员

```

### 类-抽象类
> TS中的抽象类时提供其他派生类的基类,但是不能被实例化.我们可以使用abstract官架子来定义抽象类和抽象类中的方法
```ts
abstract class Father {
  abstract getMoney(money: number): void 
}
class Son extends Father {
  getMoney() {
    console.log("我有钱");
  }
}
let long = new RichSon();
// new PoorFather()// 无法创建抽象类的实例
long.getMoney()
```