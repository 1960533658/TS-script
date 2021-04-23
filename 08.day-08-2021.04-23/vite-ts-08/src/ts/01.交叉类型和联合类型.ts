// 1. 联合类型
// 联合类型是多个类型中的任意一个类型
let a: number | string | boolean;


// 2.交叉类型
// 格式: type&type&type
// 将多个类型合并为一个类型
// 需求: 创建一个函数关于将两个对象合并为一个对象 并返回

let getNewObj = <T, U>(target: T, source: U) => {
  let res = {} as (T & U);
  res = Object.assign(target, source);

  return res;
}

console.log(getNewObj({name: "张三"}, {age: 18}));
