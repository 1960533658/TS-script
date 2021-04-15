# TS学习第三天

## 非空断言

> 在上下文中当类型检查无法断定类型时，一个性的后缀表达式操作符 "!"可以用于断言操作对象时非undefined和非null类型的变量和参数
```ts
function havaNoUndNull(str: string | undefined | null) {
function havaNoUndNull(str: string | number | boolean) {
  let str1: string = str!;
  console.log(str1)
}
havaNoUndNull(undefined)

function havaNoUndNull(str: string | number | boolean) {
  let str1: string = str!;// 报错，非空断言不能阻止除了undefined和null之外的定型
  console.log(str1)
}
havaNoUndNull("2222")

/**
 * & 注意：
 * * 1.由上述内容可知非空断言时无法阻止除了undefined和null定型之外的类型，比如number、boolean类型的值
 * * 2.尤其注意是阻止TS类型的判定而不是阻止值的进入，哪怕你传递的实参是undefined和null依然也是会进入执行的
 */

```

## 类型推断
> 类型推断是猜测，是TS的一种比较智能的行为，在声明了一个变量之后可以判断出这个值的定型（即使你没有定型），这个行为是默认的
```ts
let foo = 123;
foo = "123"// 报错，由 123 得出 foo默认的定型是number，当再次赋值时赋值数字之外的定型就会引起冲突导致报错

function add(a: number, b: number) {
  return a+b
}
let str3:string = add(2,3) // 报错，数字只可以赋值给number类型
/**
 * & 总结
 * * 1.当没有给变量定型，但是缺赋了值，那么这个值的类型就是这个变脸的定型
 * * 2.如果接收了一个返回值的变量，且给这个变量定型了一个不能接收返回值变量的定型型，那么就会报错，
 */
```

## 类型守卫

### 类型守卫-typeof
> TS熟知JS中的instanceof运算符的用法，如果你在一个条件中使用这些，TS将会导出再条件快中的变量类型

```ts
function useStr(str: string | number) {
  if (typeof str == "string") {
    str.substr(1,2)
  } else {
    str.substr // 报错,因为通过 !类型推断! 的方式经过了上面的判断已经确定当前判断块中不是字符串,而其他的定型的方法中并不存在这个方法,所以就会报错
  }
}
useStr("123")

/**
 * & 由上述的内容得知
 * * typeof会判断出变量当前所代表的值的定型时什么且会以字符串的形式返回
 */
```

### 类型守卫-instanceof
> TS熟知JS中的instanceof运算符的用法，如果你在一个条件中使用这些，TS将会导出再条件快中的变量类型

```ts
// class 创建出类,类名首字母必须大写
class Foo{
  foo = 123;
  common = "123"
} 

class Bar{
  foo = 123;
  common = "123"
}

function dostuff(arg: Foo | Bar) {
   if (arg instanceof Foo) {
    console.log(arg.foo);
    // console.log(arg.bar);// err
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo);//err
    console.log(arg.bar);
  }
}
dostuff(new Foo());
dostuff(new Bar());

/**
 * & 由上述的内容得知
 * * instanceof 判定当前对象是否是由这个构造函数创造出来的
 */
```

### 类型守卫-in
> in 操作符 可以安全的检查一个对象上是否存在一个属性,它通常也被作为类型保护使用
```ts
interface A {
  x: number
}

interface B {
  y: number
}

function dos(q: A | B) {
  if ("x" in q) {
    console.log(q.x);
    
  } else {
    console.log(q.y);
    
  }
}
```

## 联合类型
> 是将多种类型的定型保存在一个变量内,可以让一个变量可以赋值更多种的定型

```ts
let x: string | number | boolean;
x = 5;
x = true;
x = "ssds"

/**
 * * 以上均不会报错,但是也不能保存除此三种之外的定型
 */
```

## 类型别名
> 让多种数据定型通过 type 自定义一种新的定型,让这个定型保存复数种数据定型

```ts
type sssy = string | number | boolean| undefined;
let xyz: sssy = 6;
xyz = undefined;
xyz = "123";
xyz = true;

```