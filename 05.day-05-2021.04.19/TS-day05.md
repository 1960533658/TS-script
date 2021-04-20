# TS-day05

## 接口

### 接口-为什么需要接口

> js是弱类型的语言,它并不会对我们传入的代码进行任何的检测,也不会对你调用的代码数据类型检测

### 接口-接口概念及语法

> 和java语言相同,TS中定义接口也需要使用interface关键字来定义, java中,我们说一个类实现了某一个接口,在这里我们直观性值的外形,那么他就是被允许的

> interface 接口名 {属性名: 定型, 属性名: 定型...}
> > 接口名命名规范 名字+interface 或者 I+名字
\\xxxInterface或者Ixxx\\ 

### 接口-基本接口
```ts
interface userInterface {
  name: string,
  age: number
}

let getUserInfo = ({name,age}): void => {
  console.log(`我的名字叫${name},我今年${age}`);
}
getUserInfo({
  name: "tls",
  age: 12
})
```

### 接口-可选属性
> 默认情况下一个变量(对象)是响应的接口类型,那么这个变量(对象)必须实现接口中所有的属性和方法
> 但是开发中为了让接口更加灵活,某些属性我们可能希望设计成可选的,这个时候就可以使用可选属性

```ts
interface userInterface {
  name: string,
  age?: number
}

let getUserInfo = (name,age): void {
  console.log(`我的名字叫${name}${age}`);
}

getUserInfo({
  name: "sdsd"
})

/**
 * & 注意:
 * * 输出结果为 "我的名字叫tlyundefined" 
 * ? 为什么
 * * 因为可选参数为为传参的时候是undefined
 */
```

### 接口-只读属性
> 默认情况下,接口中定义的属性可读可写,但是关键字read属性值不可以进行修改,强制修改后报错

```ts
interface onlyInterface {
  readonly name: string;
  findAge(): void
}

const getpeople: onlyInterface = {
  name: "zhangsan",
  findAge(): void {
    console.log(123)
  }
}
getpeople.findAge()
console.log(getpeople.name)
```

### 接口-函数类型的接口 ???????
> interface 还可以用来规范函数的形状 interface里面需要列出参数列表返回值类型的函数定义
> 语法:
> > interface 接口名 {(属性名: 定型...): 函数返回定型????}

```ts
interface funcInterface {
  (name: string, age: number, address: string): string
}

let getFunc: funcInterface (name, age, address): string => {
  return `我的名字叫${name},我今年${age}, 我家在${address}` 
}

console.log(getFunc("zhaosi", 23, "zhongguo")
/**
 * ? 语法中小括号末尾中的定型是属于谁的
 */
```

### 接口-使用类型声明与函数类型接口的区别
```ts
type funcType = (name: string, age: number, address: string) => string;
let getType: funcType = (name, age, address) =>   `我的名字叫${name},我今年${age}, 我家在${address}`
console.log(getType("赵四", 24, "中国");

/**
 * & interface和type的区别
 * * interface能进行声明合并
 * 
 * * type可已经i选哪个类型别名,联合类型元组等类型
 * * type语句还可以使用type获取实例的类型进行赋值
 */
```

### 接口-类实现接口
- 为什么使用类实现接口的方法,而不是直接定义使用接口
> 在代码设计中,接口是一个规范,就扣通常用于定义某种规范,是你必须遵守的协议
> 站在程序的角度上说接口只规定了类里必要提供的属性和方法,从而分离了规范和实现,增强了系统的可维护性和可拓展性

> 类使用接口的语法:
> > class 类名 inplements 接口名 {属性名: 属性定型, 属性名: 属性定型}
```ts
interface carInterface {
  color: string,
  brand: string,
  run() :void
}

class Benchi implements carInterface {
  color: string,
  brand: string
  constructor(color: string, brand: string) {
    this.color = color;
    this.brand = brand;
  }
  run () {
    console.log(`我开着${this.color}的${this.brand}车奔驰在草原上`);
  }
}
let x5 = new Benchi("red", "宝马x5");
x5.run()
```

### 接口-接口的继承

> 接口继承的语法
> 一个interface可以继承多个interface,实现多个接口成员的合并
> 使用逗号隔开要继承的接口
> 注意: 尽管支持继承多个接口,但是如果继承的接口中,定义的同名o属性的类型不同的话是不能编译通过的
> 如果现在有了一个类实现Suare接口, 那么需要实现square的方法,实现接口使用implements方法
> > interface 接口名 extends (要)继承的接口,(要)继承的接口,(要)继承的接口 {}
```ts
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
  color: string,
  age: number,
  category: string

  constructor () {
    this.color = "白色";
    this.age = 3;
    this.category = "橘猫"
  }

  run(){
    console.log(`${this.color}的${this.category},今年${this.age}岁了`)
  }
}

let jumao = new Cat()
jumao.run()

/**
 * ???? 什么是square
 */
```
## 泛型

### 泛型-为什么需要泛型

> 需求:定义一个创建数组的方法,可以创建出指定长度的数组,并且可以用指定内容填充这个数组

> 语法:

> > let 类名 = <T>(形参: 定型,形参: 定型...): 返回值定型 => return .....
> > T 是一个占位符,代表将来要指定的类型 
```ts
/**
 * * 普通写法
 */
let getArray = (length: number, value: number | string): any => {
  return new Array(length).fill(value)
}

let arr: string[] = getArray(5,"aaa");
let aaa = arr.map(item => item.length);
console.log(aaa);

/**
 * * 泛型写法
 */
let getArray2 = <T>(length: number, value: T): T[] => {
  return new Array(length).fill(value)
}
let arr2 = getArray2<string>(5,"abc");
let res2 = arr2.map(item => item.length)
console.log(res2)

/**
 * ! 泛型是语序同一个函数接收不同类型参数的一种模板,在编写代码的时候,我们既要考虑代码的健壮性,也要考虑灵活性和可重用性
 * ! 通过TS的静态检测能让我们编写的代码更加健壮,但是在变得健壮的同时却丢失了灵活性和可重用性
 * ! 通过泛型不仅可以让我们的代码更加健壮,还能让我们的代码在变得健壮的同时保持灵活性和可重用性
 */
```

### 泛型-泛型约束

> 默认情况下我们可以指定泛型为任意类型,但是有些情况下我们需要自定的满足某些条件后才能指定,那么这个时候我们就可以使用泛型约束
> 语法:
> > <T extends length 接口>
```ts
interface lengthInterface {
  length: number
}
let getArr = <T extends lengthInterface>(length: number, value: T): T[] => {
  return new Array(length).fill(value)
} 

let arr3 = getArr<number>(5, 5); // 因为传进去的元素是数字,而在创建的时候遍历元素是数字的话是没有办法使用length属性的
```

### 泛型-在泛型中使用类型参数

- 一个泛型被另一个泛型所约束,就叫泛型约束中使用类型参数
> 语法: 
> > <T, K extends keyof T>(参数: T, 形参: K) =>{}
```ts
// 需求: 定义一个函数用于根据只当的key获取value

let getValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

let obj = {
  a:"b",
  b: "B"
}
console.log(getValue(onj,"a"))
```