/**
 * TODO 确定类型断言
 * ! 在TS2.7版本中引入了确定赋值断言，即允许实例属性和变量声明后面放置一个”！“
 * !从而告诉TS该属性会被明确地赋值
 */

let lang!: number;
initlize();
console.log((2 * lang));
function initlize() {
  lang = 10
}
