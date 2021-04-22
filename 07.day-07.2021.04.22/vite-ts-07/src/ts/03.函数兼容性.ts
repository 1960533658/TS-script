/**
 * 类型的兼容 性用于确定一个类型是否赋值给其他类型
 * a可以包含b,b是一定包含a的
 * 参数个数
 * 你可多不可少
 */
// let fn1 = (x: number, y: number): void => { };
// let fn2 = (x: number): void => { };
// let fn3 = (x: string, y: string): void => { };
// fn1 = fn2;
// fn2 = fn3//参数不兼容,

/**
 * 接口的实现 只有类能实现接口 然后通过实例类 来创建队对象
 * 接口在ts中相对来讲比较泛,更多的用处是 一种结构换的数据类型,他是一个规定,再告诉你这个数据应该如何写
 */

// 返回值类型
// let fn1 = (x: number, y: number): number => 123;
// let fn2 = (x: number): number => 456;
// let fn3 = (x: string, y: string): string => "你好";

// fn1 = fn2;
// fn1 = fn3;// 返回值的类型必须一摸一样,否则就会报错



// 函数的双向协变-参数的双向协变
// let fn1 = (x: number | string): void => { };
// let fn2 = (y: number): void => { };

// fn2 = fn1;
// fn1 = fn2; //参数“y”和“x” 的类型不兼容。


// 函数的双向协变-返回值的双向协变
// let fn1 = (x: boolean): (string | number) => x ? "aaa" : 123;
// let fn2 = (y:string): string => "aaa"

// fn1 = fn2; // 单一类型不能赋值给联合类型
// fn2 = fn1 // 联合类型不能赋值给单一类型


/**
 * 函数重载
 * 
 * 重写相当于重新实现
 * 重载就是根据参数类型不同 个数不同 能自动调用同名函数、符合参数类型的函数
 */

// function add(x: number, y: number): number;
// function add(x: number, y: number, z: number): number;
// function add(x: number, y: number, z: number,a:number): number;

// function add(x: number, y: number,z?: number,a?:number): number {
//   if (x && y) {
//     return x+y
//   } else if(x && y && z) {
//     return x + y + z
//   } else if (x && y && z && a) {
//     return x + y + z + a
//   }
//   return 2;
// }
// console.log(add(1, 2, 3, 4));
 