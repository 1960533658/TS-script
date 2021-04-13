/**
 * any类型
 * ! 特点：使用any就意味着不让TS进行类型检查
 * 
 * 使用场景
 * 1.对于不确定的数据类型数据类型使用any 不要因为偷懒、不懂全部使用any
 * 2.对于老项目要变成ts的使用用any
 */

// 数字类型
let num: any;
num = 1;
num = "123";
num = false;
num = {}

let arr5: any[] = [1,"2",true]
console.log(arr5);
