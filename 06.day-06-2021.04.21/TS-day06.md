# TS-day-06

## 枚举

### 枚举-数字枚举

> TS中支持两种枚举 字符串枚举和数字枚举

```ts
// 数字枚举 
enum Gender {
  male = 3,
  female
}
// 底层用的就是数字类型
console.log(Gender.female)

/**
 * & 注意
 * * 如果是给Male赋值,那么后面的值都要改变
 * * 如果是给Female赋值,那么Male的值不改变,Female的值发生改变,它之后的值可能会发生改变
 * * 可以给male和female分别赋值
 * * 数字枚举不仅仅可以使用默认值 还可以使用常量,计算后的结果
 */
const num =6;

let aaa = function(){
  return 2222
}

function aa(){
  return 2222;
}
enum Gender {
  Male = num, // 6
  Female = aa() // 2222 
}
```

### 枚举-数字枚举的反向映射
```ts
enum Gender {
  Male = 3,
  Female
}

console.log(Gender.Male) // 3
console.log(Gender[3]) // Male
```
### 枚举-字符串枚举和其反向映射
```ts
enum Gender {
  Male: "aaa",
  Famele: "bbb"
}
console.log(Gender.Male)
console.log(Gender["aaa"]); // 无法找到aaa作为索引 | 类型“typeof Gender”上不存在属性“aaa”

/**
 * & 注意: 枚举中的反向银蛇不能在字符串中实现
 * 
 * & 字符串枚举的注意点
 * * 如果是使用字符串给前面的枚举赋值,那么后面的也必须进行赋值操作
 * * 如果不复制,那么就是用默认值也会没ts认为是字符串枚举
 * * 和数字不一样 字符串枚举不能使用常量或者计算结果给枚举赋值
 * * 虽然字符串枚举不能使用商量或计算结果给枚举赋值,但它可以使用内部的其他枚举值来赋值
 */
const num = 6;

let aaa = function(){
  return 2222
}

function aa(){
  return 2222;
}
enum Gender {
  Male ="asdd",
  Female = 5,
  Yao = Male
}
console.log(Gender.Yao); // "asdd"
```

### 枚举-异构枚举
> 枚举中即包含数字又包含字符串的枚举 我们称之为异构枚举
> 如果是字符串枚举,那么我们无法通过原始值获取到枚举值

```ts
// enum Gender {
//   Male = 5,
//   Female = 'addd'
// }



enum Gender {
  Male = 'addd',
  Female = 5
}

console.log(Gender.Male);
console.log(Gender[5]);
```


### 枚举-枚举成员类型

```ts
enum Gender {
  Male: "aaa",
  Famale: "bbb"
}

interface PersonInterface {
  gender: Gender.male
}

class Person implements PersonInterface {
  gender: Gender.Male
  constructor () {
    this.gender = "aaa" // // 不能将类型“"aaa"”分配给类型“Gender.Male”
    this.gender = Gender.Male
  }
}

enum Gender {
  male,
  Female
}

interface PersonInterface {
  gender: Gender.male
}
class Person implements PersonInterface {
  gender: Gender.Male

  constructor () {
    this.gender = 1
  }
}

/**
 * & 之前的版本都可以使用字符串枚举来声明类型的接口
 * & 注意: 当前版本 不可使使用字符串枚举作为接口的类型,只能使用数字枚举
 */
```

### 枚举-联合枚举类型
> 联合枚举类型事件多种数据类型通过 | 链接起来
> 我们可以把枚举类型当作一个联合类型来使用

```ts
enum Gender {
  Male,
  Female
}

interface PersonInterface {
  gender: (Gende.male | Gender.Famale)
}

class Person implements PersonInterface {
  gender: (Gender.Male | Gender.Female)
  constructor () {
    this.gender = 1
  }
}
```

### 普通枚举和常量枚举
> 普通枚举在编译之后是一个真实存在的对象,所以可以在运行时使用
> 而像接口这种只能用来做为约束的静态检测的代码,编译之后是不存在的

**编译之前**
```ts
interface TestInterface {
  age: string,
  num: number
}
enum Gender1 {
  Male,
  Female
}

let a = Gender.Male
console.log(a)

// 常量枚举
const enum Gender2 {
  male = 5,
  female = 6
}
let b = Gender2.male;
console.log(b)

/**
 * & 普通枚举和常量枚举的区别
 * * 普通枚举在编译后在js文件中产生真实纯在的对啊ing
 * * 常量枚举不会产生真实存在的对象,而是利用枚举成员的值替换到使用到的地方
 */
```

**编译之后**
```js
var Gender1;
(function (Gender1) {
    Gender1[Gender1["Male"] = 0] = "Male";
    Gender1[Gender1["Female"] = 1] = "Female";
})(Gender1 || (Gender1 = {}));
var a = Gender1.Male;
console.log(a);
var b = 5 /* male */;
console.log(b);

```