// 通过[]索引类型访问操作符,我们就能得到某个索引的类型

interface Person {
  name: string;
}

// 声明一个类型 我不知道
// 类型通过Person["name"]得到的
type s = Person["name"];
// console.log(typeof s); // “s”仅表示类型，但在此处却作为值使用

let w:s = "zs"

// 应用场景
// 需求: 获取指定对象 部分属性值 放到数组中返回

// let obj = {
//   name: 'zs',
//   age: 18,
//   married: true
// }
// let arr: (string | number | boolean)[] = ["zs",14,true]

let getValue =  <T,K extends keyof T>(obj: T, keys: K[]):T[K][] =>{
  let arr = [] as (T[K][])
  keys.forEach(key => {
    arr.push(obj[key])
  });
  return arr;
}
let obj3 = {
  name: 'zs',
  age: 12,
  marrired: true
}
getValue(obj3,['name',"age","marrired"])
