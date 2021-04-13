/**
 * 某种程度上来说，void类型像是any类型相反，他表示没有任何类型。
 * *当一个函数没有返回值时，你通常会见到其返回值类型是void
 * 
 * !声明一个void类型的变量没有声明作用，意味着你只能为他赋予null和undefined
 */

function sayhi(name:string):void {
  console.log("你好"+name);
  // return undefined
  // return null
  
}
sayhi("sadsad")
//let a: void = 2;//报错 不能将类型“number”分配给类型“void”
let b:void = undefined
// let c: void = null// 报错 不能将类型“null”分配给类型“void”
/**
 * "strict": true, strictNullChecks 代表是否启用严格代码模式
 * 严格代码模式下不能将null赋值给void类型的变量，也不能return
 */

/**
 * TODO 默认情况下null和undefined是所有的类型的子类型
 * TODO 就是说你可以把null和undefined赋值给unmber类型的变量
 * TODO 然后当你制定了 --strictNullChecks标记（严格代码模式），null和undefined只能赋值给any和他们本身的类型
 * TODO 这能避免很多常见的问题
 */