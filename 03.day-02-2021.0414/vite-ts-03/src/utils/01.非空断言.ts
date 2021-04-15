/**
 * * 非空断言
 * ! 在上下文中当类型检查其无法断定类型时,一个新的后缀表达式操作符!可以
 * ! 用于断言操作对象是非null呵非undefined类型.具体而言, x!降重x值域排除null和undefined
 * 
 */

function notnull(str: string | undefined | null) {
  // 某种情况下 我要初始化对象
  // null代表空 是代表意料之中的一般用于初始化一个对象
  // undefined 代表空 未定义 代表的是意料之外
  let str1:string = str!;
  console.log(typeof str1);
}
notnull(undefined)

/**
 * & 注意：
 * * 1.由上述内容可知非空断言时无法阻止除了undefined和null定型之外的类型，比如number、boolean类型的值
 * * 2.尤其注意是阻止TS类型的判定而不是阻止值的进入，哪怕你传递的实参是undefined和null依然也是会进入执行的
 */