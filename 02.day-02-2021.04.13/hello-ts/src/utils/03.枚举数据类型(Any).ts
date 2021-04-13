/**
 * 枚举类型是TS为JS扩展的一种类型，在原生的JS中没有枚举类型
 * 枚举用于表示固定的几个取值
 * 列如，一年只能有四季，人的性别只能有男女
 * 默认情况下，从0开始编号
 * 也可以手动的指定成员的数值
 */
// 语法： enum 枚举的类型名称{键 键 键}
enum Gender {
  male,// 男士
  female = -6,// 女士
  secret,
  le
}
let X: Gender = Gender.le;//-4
let Y: Gender = Gender.secret;//-5
let Z: Gender = Gender.male;//0
console.log(X, Y, Z);

/**
 * 由XYZ而知
 * 当第一个没有赋值的时候也male的默认值为0，之后的值按照前一个值+1的
 * 规制得到第二个值为1（当没有给属性赋值的时候）
 * 如果赋了值，那么之后的没有复制，那么之后的值依然是前面的值+1，无论值是否重复
 */
