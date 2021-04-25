/**
 * defineproperty(obj, prop, descriptor)
 * & 作用：可以用来精确添加或覆盖对象的属性只需要在descriptor对象中将属性的特性描述清楚
 * * 1.数据描述符，它拥有四个属性配置
 * * - configurable 数据是否可被删除
 * * - enumberable： 属性是否可枚举
 * * - value： 属性值，默认undefined
 * * - writable： 属性是否可读写
 * 
 * ! 语法 Object.defineProperty(obj,属性,property)
 */
// let obj = { name: "zhangsan", age: 18 }
// Object.defineProperty(obj, "age", {
//   value: 12
//  })
// Object.defineProperty(obj, "age", {
//   writable: true
// })
// console.log(obj);


// enumberable： 属性是否可枚举

// let obj2 = {name: "zs",age: 123}

// age不可枚举
// Object.defineProperty(obj2, "age", {
//   enumerable: true
// })

// for (const key in obj2) {
//   console.log(obj2[key]);
// }
// console.log(obj2)

// 是否可以被删除
// let obj4 = { name: "sdsa", age: 12 }
// Object.defineProperty(obj4, "age", {
//   configurable: true
// })
// obj4.age = 9 // 可以修改
// delete obj4.age
// console.log(obj4);

/**
 * 存取描述符，它同样拥有四个属性选择
 * configurable： 数据是否可删除 可配置
 * enumberable： 属性是否可枚举
 * get： 一个给属性提供给getter的方法 如果没有getter则为undefined
 * set： 一个给属性提过setter的方法 如果没有setter 则为undefined
 * 
 * 需要注意的是： 数据描述符的value，writeable和存取描述符中的getset不能同时存在，否则会抛出一样
 */

// let obj3 = { name: 'ls' };
// Object.defineProperty(obj3, 'age', {
//   set(num) {
//     console.log("设置了值")
//     value= num
//   },
//   get() {
//     console.log("获取了值");
    
//     return value
//   }
// })

// obj.age = 3;
// console.log(obj.age);
