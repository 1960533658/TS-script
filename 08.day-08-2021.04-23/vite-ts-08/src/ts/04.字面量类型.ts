/**
 * ? 什么是字面量
 * 字面量就是源代码中一个固定的值
 * 比如数值字面量123\字符串字面量 "a","asd"
 * 
 */
let num: number // 不是
num = 1 // 是
 
// 在ts中我们可以把字面量作为具体的类型来使用
// 当使用字面量作为具体类型是, 该类型的取值就是字面量的值

type myNum = 1;
type num = {
  name: string
}

let value1: myNum = 1;
// let value2: myNum = 2 // 不能将类型“2”分配给类型“1”