/**
 * 类型守卫-in
 * ! in 操作符 可以安全的检查一个对象上是否存在一个属性,它通常也被作为类型呢保护使用
 */

interface A {
  x: number
}

interface B {
  y: number
}

function dos(q: A | B) {
  if ("x" in q) {
    console.log(q.x);
    
  } else {
    console.log(q.y);
    
  }
}