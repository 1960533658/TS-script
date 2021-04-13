let arr: number[] = [1, 2, 3];

let arr1: Array<number> = [1, 2, 3];
let arr2: Array<string> = ["1", "2", "3"]
console.log(arr1,arr2,arr);
/**
 * TS像JS一样可以操作数组元素
 * 有两种方式可以定义数组
 * 第一种，可以在元素类型后接上[],表示由此类型元素组成的一个数组
 * 第二种方式是使用数组的泛型 Array<元素类型>
 */