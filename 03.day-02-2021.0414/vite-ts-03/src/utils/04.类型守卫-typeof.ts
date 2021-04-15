/**
 * * typeof关键字
 * ! TS熟知Javascript中的instanceof和typeof运算符的用法.如果你在一个条件块中使用这邪恶
 * ! TS将会推导出在条件块中的变量类型
 * 
 */
function useStr(str: string | number) {
  if (typeof str == "string") {
    str.substr(1,2)
  } else {
    // str.substr(1,2)// 因为在上面已经判断str不是string类型了,却还在用字符串的方法就会报错
  }
}
// useStr("123")