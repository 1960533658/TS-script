# TS-day-08

## 联合类型和交叉类型
### 联合类型
> 联合类型是多个类型中的任意一个类型
```ts
let a: number | string | boolean
```
### 交叉类型

> 语法: 
> > type&type&type
> 将多个类型合并为一个类型
```ts
// 需求: 创建一个函数关于将两个对象合并为一个对象并安徽

let getNewObg = <T, U>(target: T, source: U) => {
  let res = {} as (T & U);
  res = Object.assign(target, source);

  return res;
}
console.log(getNewObj({name: "张三"}, {age: 18}))
```

### 类型保护
```ts
// 类型守卫 typeof instanceof
let fn = (x: number | string): number | string => {
  if( typeof x === "string") {
    return x.length
  }else {
    return x.toFixed()
  }
}


class Dog {
  name: string
  constructor() {
    this.name = "ssss"
  }
}

class Cat {
  age: number
  constructor() {
    this.age = 2
  }
}

function fn1(): string | number {
  let num = Math.random()
  let res = num >= 0.5 ? new Dog(): new Cat()
  // 如果是Dog就返回dog
  if (res instanceof Dog) {
    return res.name
  } else {
    return res.age;
  }
}
console.log(fn1());
```

### 接口和类型别名的异同
```ts
// 类习别名
type uni = string | number | boolean | symbol

let value: uni = "aqaa";
value = 123;
value = true
// 接口和类型别名的异同
// 1. 都可以描述属性或者方法
interface PersonInterface {
  name: string
  study() : void
}
// 定义类型别名
type PersonType = {
  name: string,
  study(): void
}
// 类似于类型别名的实现
let obj: PersonType = {
  name = "zs",
  study() {
    console.log(111)
  }
}

// 2.都允许拓展
interface PersonInterface {
  name: string,
  study(): void
}

interface MainInterface extends PersonInterface {
  age: number
}

class Man implements MainInterface {
  name: string;
  age: number;
  constructor () {
    this.name = "zs";
    this.age = 12;
  }

  stydy() {
    console.log(111)
  }
}

// 类型别名扩展 & 相当于合并

type Persontype = {
  name: string;
} & {
  age: number
}

let obj: personInterface = {
  name: "zs",
  age: 12
  study() {
    console.log(1222)
  }
}
//3. type 可以声明基本类型别名,联合类型元组等
type str = string;
type str1 = [string, number, boolean]
let arr: str1 = [aaa,1,true]

interface typeInterface {
  name: string
}
interface typeInterface = string; //  语法错误 “string”仅表示类型，但在此处却作为值使用。


// type不能自动合并
interface PersonInterface {
  name: string
}

interface PersonInterface {
  address: string
}
interface PersonInterface {
  family: string
}

class family implements PersonInteraface {

}

type personType = {
  name: string
} & {
  name: string
} & {
  name: string
}

type PersonType = {
  name: string
}
type PersonType = {
  name: string
}
type PersonType = {
  name: string
}
```

## 字面量类型
> 字面量类型就是源代码中的固定的值,比如数值字面量123 字符串字面量"a"
> ts中我们可以把字面量作为具体的类型来使用
> 当使用字面量作为具体类型时,该类型的取值就是字面量的值
```ts
let num: number // 不是字面量类型
num = 123 // 是字面量类型

// ts中我们可以把字面量作为具体的类型来使用
// 当使用字面量作为具体类型时,该类型的取值就是字面量的值
type myNum = 1;
type num = {
  name: string
}
let value1: myNum = 1
let value2: myNum = 2 // 不能将类型“2”分配给类型“1”
```

## 可辨识联合类型
> 具有共同的特征
> 一个类型别名, 包含了共同的可辨识特征的类型联合

```ts
// 正方形
interface Square {
  kind: "square",
  size: number
}
// 长方形
interface Rectangle {
  kind: "square",
  width: number,
  height: number
}

// 圆形
interface Circle {
  kind: "circle"
  radius: number
}

type shape = Square | Rectangle | Circle;
// 计算面积
function getAree(s: shape) {
  switch (s.kind) {
    case "square":
      return s.size ** 2

    case "rectangle":
      return s.height * s.width
    case "circle":
      return Math.PI * (s.radius** 2)
  }
}

console.log(getAree({
  kind: "square",
  size; 3
}))
```

## 可辨识度联合完整性检查
> 具有相同的特征
> 一个类型别名包含了共同的可辨识特征的类型联合

```ts
// 正方形
interface Square {
  kind: "square";
  size: number
}

// 长方形
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number
}

// 圆形
interface Circle {
  kind: "circle";
  radius: number
}

type Shape = Square | Rectangle | Circle;
// 写一个功能计算面积
// 根据可辨识特征来响应的计算
function getArea(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size      
    case "rectangle":
      return s.height * s.width
    case "circle":
      return Math.PI* (s.radius * s.radius)
  }
}

console.log(getArea({
  kind: "rectangle",
  width: 1,
  height: 2
}));


/**
 * ? 什么是可辨识联合的完整性检查
 * * 开启严格模式+ 韩式的返回值类型
 * * Never
 */
```

## 索引类型访问操作符

```ts
// 通过[]索引访问类型操作符我们就能得到某个素银的类型
interface Person {
  name: string;
}

// 声明一个我不知道是什么的类型 
// 类型通过Person["name"]得到的
type s = Person["name"];
let w:s= "zhangsan"
// console.log(typeof s); // “s”仅表示类型，但在此处却作为值使用

// 应用场景
// 需求: 获取指定对象 放回到数组中返回

let getValue = <T, K extends keyof T>(obj: T, keys: K[]): T[K][] => {
  let arr = [] as (T[K][])
  keys.forEach(key => {
    arr.push(pbj[key])
  })
  return arr
}

let obj3 = {
  name: "zs"
  age: 12,
  marrired: true
}
getValue(obj3,["name","age","marrired"])
```