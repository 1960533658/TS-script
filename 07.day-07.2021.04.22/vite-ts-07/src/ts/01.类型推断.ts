/**
 * ? 什么是自动类型推断
 * ! 不用明确告诉编译器具体是什么类型，编译器就知道是什么类型
 * 
 */
/**
 * 根据初始化值进行推断
 * & 注意如果现在定义再初始化，那么是无法自动判断的，如果定义时初始化，那么ts就会自动进行类型推断
 */
// let value;
// value = 20// any

// let value2 = 123 // number
// let value3 = "123" // string

// // 根据上下文类型自动推断
// let fn = (numA: number, numB: number) => {
//   return numA+numB
// }

// let res = fn(1,2)//number