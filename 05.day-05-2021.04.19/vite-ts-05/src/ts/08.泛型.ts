/**
 * 定义一个创建数组的方法,可以创建出指定长度的数组,并且可以用指定的内容填充这个数组
 * 
 */

/**
 * ! 泛型是语序同一个函数接收不同类型参数的一种模板.在编写代码的时候,我们既要考虑代码的健壮性,又要考虑代码的灵活性和可重用性
 * ! 通过TS的静态检测能让我们编写的代码更加健壮,但是在变得健壮的同时却丢失了灵活性和可重用性
 * ! 通过泛型不仅可以让我们的代码变得更加健壮,还能让我们的代码在变得健壮的同时保持灵活性和可重用性
 * 
 */
// //ts
// let getArray = function (length, value) {
//   return new Array(length).fill(value)
// }
// let arr = getArray(5, "abc")
// console.log(arr);

// ts
let getArray = (length: number, value: number | string):any => {
  return new Array(length).fill(value)
}

let arr:string[] = getArray(5,"aaa")
let aaa = arr.map(item => item.length);
console.log(aaa);

let getArray2 = <T>(length: number, value: T): T[] => {
  return new Array(length).fill(value)
}

let arr2 = getArray2<string>(5, "abc");
let res2 = arr2.map(item => item.length)

console.log(res2);


// 泛型-约束
/**
 * 默认情况下我们可以指定泛型为任意类型,但是有些情况下我们需要自定的类型满足某些条件后才能指定那么这个时候我们就可以使用泛型约束
 */

interface lengthInterface {
  length: number
}
let getArray3 = <T extends lengthInterface>(length: number, value: T): T[] => {
  return new Array(length).fill(value)
}
// number[] 数组没有length属性
// let arr3 = getArray3<number>(5, 5);
let res3 = arr.map(item => item.length);
console.log(res3);

let getValue = <T,K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

let obj = {
  a: "d",
  b: "B"
}
console.log(getValue(obj, "a"));
// console.log(getValue(obj, "c"));