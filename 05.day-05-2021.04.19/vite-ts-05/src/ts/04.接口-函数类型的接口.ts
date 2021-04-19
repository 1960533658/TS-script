/**
 * * 函数类型接口
 * ! interface还可以用来规范函数的形状. interface里面需要列出参数列表返回值类型的函数定义
 * 语法:
 * interface xxx {(xxx: xxx, xxx: xxx...): string}
 */

interface funcInterface {
  (name:string, age: number,address: string): string
}
let getFunc: funcInterface = (name, age, address): string => {
  return `我的名字叫${name},我今年${age}, 我家在${address}`
}

let res = getFunc("sd",23,"zhongguo");
console.log(res);

interface funcInterface2 {
  (name3: string, age3: number, desc: string): string
}

let getFunc2: funcInterface2 = (name3, age3, desc) => {
  return `${name3}${age3}${desc}`
}

console.log(getFunc2("康", 123, "sdsdsd"));

