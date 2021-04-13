// 元组
/**
 * 数组的特点：ts中的数组和js、中的数组
 * 1.js中的数组元素说明类型都可以
 * 2.js中的数组长度随时可以变的
 * 元组的特点
 * 1.ts中的元组的元素数据类型是对号入座的
 * 2.ts中的元组的长度不可变
 */

let aTuple: [string, number, boolean];
aTuple = ["aaa", 1, true];
console.log(aTuple);

/**
 * ! 注意：在使用Tuple类型的过程中（赋值），写错会报错、多写会报错
 * ! 写反会报错，少些也会报错
 */
