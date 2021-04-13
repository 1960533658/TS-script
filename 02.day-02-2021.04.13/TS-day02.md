# TS-第二天

## 基础数据类型

### 数组类型
```ts
let arr: number[] = [1, 2, 3];
let arr1: Array<string> = ["1","2","3"];
let arr2: Array<number> = [1, 2, 3];
console.log(arr1,arr2,arr)

/** 
 * ! TS像js一样可以操作数组元素,有两种方法可以定义数组
 * TODO 第一种,可以在元素类型后面街上[],由此类型元素组成的一个数组
 * TODO 第二种,使用数组中的泛型 Array<元素类型>
 */
```
### 元组类型aTuple
| 数组的特点 | 元组的特点|
|:-|:-:|
| js中数组的元素说明类型都是可以变的 | ts中的元素的元素数据类型是对号入座的 |
| js中的数组长度随时可以变的 | ts中的元组长度不可变 |
```ts
let aTuple: [string, number, boolean];
aTUple = ["aaa", 1, true];
console.log(aTuple)

/**
 * ! 注意: 在使用Tuple怨怒在类型的过程中(赋值),定义元素的数据类型不同时会报错,个数多了会报错 写反会报错, 少协会八篇cup 
 */
```
### 枚举类型
> 枚举类型时TS为JS扩展的一种类型,在原生JS中并没有枚举的类型
> 枚举用于表示知道固定的几个或者几项的值,近乎不会改变,比如一年只有四季,人的性别之后男女
> 默认情况下从0开始编码

语法:  **`enum 枚举的类型名称{键,键=值,键}`**
```ts
enum Gender {
  male,// 男士
  female = -6,//女士
  secrent,
  le
}
let Y: Gender = Gender.secret;//-5
let X: Gender = Gender.le;//-4
let Z: Gender = Gender.male;//0
console.log(X, Y, Z);

/**
 * ! 由 上述的XYZ的值可知
 * ! 第一个定义的mela默认值为0,每一个明确定义的值都会影响后面的没有定义的值而且每一个之后的值的时进行+1操作
 */
```

### any类型
> 特点: 使用any就意味着不让TS进行类型检查
```ts
let num = any;
num =1;
num = "123";
num = false;
num = {};
num = ["1",2,true,[],{a:1}]

let arr: any[] = [1,"2",true]
console.log(arr,num)


/**
 * ! 使用场景
 * TODO 对于不缺定的数据类型使用any 不要因为偷懒,不懂全部使用any
 * TODO 对于老项目要变成ts要使用any 
 */
```

### void类型
1. 某种程度上来说 void类型像是any类型的相反面, 他表示没有任何类型何止
  1. 当一个函数没有返回值的时候,通常会见到返回值的类型时void
2. 
```ts
function sayhi(name: string):void {
  console.log("你好" + name)
  // return undefined
  // return null
}
sayhi("大撒大撒");
let b:void = 2 // 报错 不能将"number"分配给"void"
let b:void = undefined // 报错 不能将"number"分配给"void"
let b:void = null // 报错 不能将"number"分配给"void"

/**
 * ! 声明一个void类型给你的变量没有声明作用,意味着你只能为它赋予null和undefined
 * ! 但是当项目根目录下的 `tsconfig.json` 中配置了 "strict": true 那么就不能将void类型的变量赋值为null,因为这是配置了 strict为true的情况下代码执行标准时严格代码格式
 * 
 * 
 * TODO 默认情况下null和undefined时所有类型的子类型
 * TODO 就是说可以把unll和undefined赋值给number类型的变量
 * TODO 当指定了 --strictNullchecks标记(严格代码模式),null和undefined只能赋值给any和他们类型的本身,这样能避免很多问题
 */
```

### unknown类型
> unknown类型: 就像所有的类型都能赋值给any, 所有的类型也能赋值给unknown成为TypeScript类型系统中的另一顶级对象
```ts
let vlaue: unknown;
value = 5;
value = "1";
vlaue = true;
let c: boolean = true; // 报错 不能将"unknown"分配给类型"boolean"

/**
 * ! unknown类型只能赋值给any类型和unknown类型本身
 */
```

## 对象类型
> 对象类型object表示原始数据类型
> 是number， string， boolean， null， undefined之外的类型
```ts
declare function create(o:object | null):void;
let create1 = new Function()
let create({a:1});
create(null)
/**
 * TODO declare时TS独有的,会在编译ts代码的时候通过 shims-vue.d.ts 的文件中的结构到初中编译出来 let create = new Function() 这段代码
 */
```
## TypeScript 断言
> 就是给被赋值的(且未进行类型限定)变量定义为这个现在要赋的值的类型限定
```ts
let someStr: any = "this is a String";
let strlength = (someStr as string);
console.log(typeof strLength)//string

/**
 * ! 注意 一般都是把any转换为其他类型,当给当前的被复制的变量先限定类型而且与类型断言的类型不一致的时候会把报错
 */
```

## 确定类型断言

```ts
let lang!:number;
initLize();
console.log(2*lang);
function initLize() {
  lang = 10;
}

/**
 * ! 上述代码中如果不添加 ! ,就会报错,因为TS没有与解析,这是由于TS代码是静态的,不会提升变量
 * ! 在TS2.7版本以内了确定赋值断言, 即允许实例属性和变量声明后面放置一个 ! 
 * ! 从而高耸TS 该属性之后名进行明确的赋值
 */
```
## 类型守卫

## 联合类型和类型别名