/**
 * & 数据类型兼容
 * ! 类型兼容用于确定一个类型是否能赋值给其他类型
 * ! 协变: 在同一个方向
 * ! 逆变: 只在相反的方向
 * ! 双向协变: 包括同一个方向和不同的方向
 * ! 不变: 如果类型不完全相同,那么他们是不兼容的
 */

// 接口兼容性
// 检查接口的兼容想接口类型不能赋值给对象
// interface PersonInterface {
//   age: number;
// }
// let t: PersonInterface;
// let p1 = { age: 18 };
// let p2 = { name: "张三" };
// let p3 = {nme: "撒旦",age: 18}

// t = p1;
// // t = p2;
// t = p3;

// 会递归检查

// interface PersonInterface {
//   age: number;
//   name: {
//     firstname: string
//   }
// }
// let l1: PersonInterface;
// let p1 = { age: 18 };
// let p2 = { name: "张三" };
// let p3 = {nme: "撒旦",age: 18}

// 声明一个接口 
// interface fn {
//   (x:number,y:number):void
// }

// let fn1: fn = (y: number, x: number) => {
  
// }

// 接口的现实 只有类能实现接口 然后通过实力类来创建
// 我们在ts中相对来说比较范类,不仅可以让类来是实践接口,更多的用处是一种结构化的数据类型,它是一个规定或者规范,告诉你这个数据应该如何写