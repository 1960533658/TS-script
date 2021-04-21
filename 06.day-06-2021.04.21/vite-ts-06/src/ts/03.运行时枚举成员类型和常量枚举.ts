// 运行时枚举
// 枚举在编译之后是一个真实存在的对象,所以可以在运行时使用
// 而像接口这种只是用来作为约束做静态检测的代码, 编译之后是不存在的
interface TestInterface {
  age: string,
  num: number
}

enum Gender1 {
  Male,
  Female
}

let a = Gender1.Male
console.log(a);


// 常量枚举
const enum Gender2 {
  male = 5,
  female = 6
}

let b = Gender2.male;
console.log(b);


/**
 * & 普通枚举和常量枚举的区别
 * * 普通美剧在编译后在js文件中产生真实存在的对象
 * * 常量枚举不会产生真实存在的对象,而是利用枚举成员的值替换到使用到的地方
 * 
 */