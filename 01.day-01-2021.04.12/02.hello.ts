// let num = 12;
// let num2: Number;
// num2 = "nihao"

/**
 * 
 * @param a any 任何数据
 * @param b 数字
 */
function aler(a:any[], b:number) {
  console.log(a.length+10);
}
// aler([1,2],"23")

// 当固定了类型之后，传入或者赋值的类型不符合数据限制时，会直接报错（不编译）
let num1: Number = 19;
// 16进制
let num2: Number = 0x0001;
// 二进制
let num3: Number = 0b101010
// 八进制
let num4: Number = 0o7;
// 数组字符串
let arrstr: Array<String> = ['1', '2', '3']
// let arrstr2: Array<String> = ['1', '2', 3]// 有数字报错