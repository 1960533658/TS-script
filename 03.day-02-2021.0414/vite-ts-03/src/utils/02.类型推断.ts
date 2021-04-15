// ! 类型推断是猜测,是TS的一种比较智能的行为

let foo = 123;
// foo = "123";//默认类型为num,后面赋值了字符串,所以报错

// 函数返回值
function add(a: number, b: number) {
  return a+b
}
// let str3:string = add(2,3) // 数字只可以赋值给number类型