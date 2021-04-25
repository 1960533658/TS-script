# TS-day-10

## 装饰器

### defineProperty
> 可以用来精确添加或覆盖对象的属性,只需要在descriptor对象中将属性的特性描述清楚
> 1. 数据描述符,它拥有四个属性而配置
> > - configurable: 数据是否可被删除
> > - enumberable: 属性是否可以被枚举
> > - value: 属性值,默认undefined
> > - write: 属性书否可读写

`defineProperty在js中不会报错,在ts中会报错 01.defineProperty`

**语法: Object.defineProperty(obj,属性,property)**
#### defineProperty-write
```ts
let obj = { name: "zhangsan", age: 18}
// 将age变为12
Object.defineProperty(obj,"age", {value: 12})
// 设置是否可读写true:可读 false不可读写,访问报错
// TypeError: Cannot assign to read only property 'age' of object '#<Object>'
Object.defineProperty(obj,"age", {
  wirteable: true
})
console.log(obj)// { name: "zhangsan", age: 18}
```

#### defineProperty-configable
> 设置对象中的参数是否可以被删除
> > 为true: 不能被删除 为fasle不能被删除,删除报错: TypeError: Cannot delete property 'age' of \#\<Object>
```ts
let obj4 = { name: "sdsds", age: 12}
Object.defineProperty(obj4, "age", {
  configruable: true
})

obj4.age = 9
delete obj4.age  // 报错是ts的原因,这个问题可以忽略,不影响效果
consle.log(obj4)// {name: "sdsa"}
```

#### defineProperty-enumberable
> 为true允许属性值枚举,为false禁止这个属性值进行枚举(枚举操作时不会存现)
```ts
let obj2 = {name: "zs", age: 123};
Object.defineProperty(obj2, "age", {
  // 
  enumberable: true
})
// 为true时: zs -- 123
// 为false时: zs
for(const key in obj2) {
  console.log(obj2.[key])
}
// 为true时: {name: "zs", age: 123}
// 为false时: {name: "zs", age: 123}
console.log(obj2)
```

#### defineProperty-value
> value 默认值为undefined,不存在布尔值,用于给属性赋值
```ts
let obj = { name: "zhangsan", age: 12};
Object.defineProperty(obj, "age", {
  value: 12
})
console.log(obj.age) // 12
```

#### defineProperty-存取操作符
> configurable： 数据是否可删除 可配置
> enumberable： 属性是否可枚举
> get： 一个给属性提供给getter的方法 如果没有getter则为undefined
> set： 一个给属性提过setter的方法 如果没有setter 则为undefined

**注意: 数据描述符的value,writeable和存取描述符中的getset不能同时存在,否则会抛出异常**

```ts
let obj3 = { name: "ls"}
Objct.defineProperty(obj3,"age", {
  set(num) {
    console.log("设置了值")
    value = num
  },
  get () {
    console.log("获取了值")
    return value
  }
})
obj3.age = 3
console.log(obj3);
console.log(obj3.age);
```


### 方法修饰器

> 方法修饰器卸载一个方法的声明之前
> 方法修饰器可以用来监视、修改、或者替换方法的定义
> 方法修饰器表达式会在运行时当作函数被调用,传入下列三个参数
> - target: 对于静态方法而言就是当前的类,对于实例方法而言就是当前实例
> - propertykey: 被绑定方法的名字
> - desriptor: 被绑定方法的属性描述符
```ts
function test(target: any, propertykey: string, desriptor: ProertyDescriptor) {
  // {constructor: ƒ, sayHello: ƒ}
  console.log(target) // 类 class Peron 或者实例Peron
  // sayHello
  console.log(propertykey) // 绑定的方法
  // {writable: true, enumerable: false, configurable: true, value: ƒ}
  console.log(desriptor) // 准备替换的被绑定的方法的定义
  desriptor.value = function () {
    console.log("这是替换sayHello的方法")
  }
}

class Perosn {
  @test
  sayHello() {
    console.log("你好 TS")
  }
  static sayAge() {
    console.log("我今年成年了")
  }
}
let zs = new Peron();
zs.sayHello() // 这是替换sayHello的方法
```


### 访问装饰器

> 访问器装饰器生命在访问器之前
> 访问装饰器应该在访问装饰器的属性描述并且可以用来监听、修改或替换一个访问器装饰器的定义
> 访问器装饰器表达式会在运行时当作函数被调用，传入下列三个参数
> - 对于惊天成员来说是类的构造函数,对于实例成员来说是类的原型对象
> - 成员名称
> - 成员的属性描写符

> 注意:
> - TS不允许同时装饰一个成员的get和set访问器
> - 取而代之的是 一个成员所有的装饰器必须在文档顺序的第一个访问器上

```ts
function test2 (target: any, proertyKey: string, desriptor: PropertyDesriptor) {
  desriptor.set = () => {
    target.MyName = "sss"
  }
  desriptor.get = () => {
    return target.name + "ssss"
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
  public get _name(v: string): string {
    return this.name
  }
}

let dsds = new Person2("zs")
console.log(dsds._name)// undefinedaaaa ,未找到获取原始name的方法
```

### 属性装饰器
> 属性装饰器卸载一个属性声明之前
> 属性装饰器表达式会在运行时当作函数被调用,传入两个参数
> - target: 对于静态属性来说就是当前的类,对于实例属性来说就是当前的实例对象
> - propertyName: 成员的名字
**格式: cuntion 属性装饰器名(target, propertyName) {}**
**格式: class 类名(@属性装饰器名(换行) 属性名: 定型) {}**
```ts
function test3(target: any, propertyName: string) {
  console.log(target,propertyName) // constructor: ƒ} "name"
  target.name  = "sdsdsd"
  target.ccc = 123213
  console.log(target) // {name: "sdasdsadsad", ccc: 125418561, constructor: ƒ}
}

class Person3 {
  @test3
  name: string
  static age: number
  constructor() {
    this.age = "ss"
  }
  static sayHi() {
    console.log(2333)
  }
}
let dafda = new Person3();
console.log(dafda.name) // sss
```

### 参数装饰器

> 参数装饰器写在一个参数的声明之前

> 参数装饰器表达式会在函数运行时被调用,传入下列三个参数
> - target: 对于静态成员来说是当前的类,对于实力来说是构造函数
> - fnName: 参数所在的方法的名称
> - index: 参数在参数列表中的索引

```ts
function test4(target: any, fnName: string, index: number) {
  console.log(target, fnName, index)
}

class Peron {
  sayHello(name:string, @test age:number){
  console.log(`我叫${name}, 我今年${age}`);
}
```

## 声明文件
> 对于常用的第三方库, 其实已经有大神帮我们编写好了对应的声明文件。所以在企业开发中, 如果我们需要使用一些第三方JS库的时候我们只需要安装别人写好的声明文件即可
> TS声明文件的规范 @types/xxx 例如: 想要安装jQuery的声明文件, 那么只需要npm install @types/jquery 即可

`导入jQuery main.ts`
```ts
import "./lib/jQuery/jQuery-3.4.1"
// 此时是不能直接使用$()等jQuery的方法的,因为ts不能识别这些都是什么,所以需要我们自己设置让他识别第三方库
```

`声明jQuery @type/aaa.d.ts`
```ts
declare const $: (selector: string) => {
  // 声明了声明方法就会在使用在个标识符的时候提示声明代码,比如使用获取元素之后,.之后就会提示width()
  width(): number
}
```

`使用第三方库 aaa.ts`
```ts
console.log($("#app"));
console.log($("app").width())
```