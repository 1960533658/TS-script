/**
 * ! 函数类型-定义
 */
// * 函数式声明
function sum(a:number, b:number) {
  return a+b
}

// * 函数表达式
let sum2 = function (a: number, b: number) { return a + b }

// * 箭头函数
let sum3 = (a: number, b: number) => a + b

/**
 * ! 函数类型-可选参数
 * ! 在TS函数中制定了参数后，在调用的时候就必须传入相应个数的参数
 * ! 在JS中函数的参数是可选的，如果在调用函数的时候没有指定函数的参数的话，这个参数就是undefined
 * ! 在TS中我们可以指定参数为可选，这样我们在调用函数的时候就可以选择性传参了
 */

function sum4(a:number, b?: number) {
  // return a + b; // 报错 因为b可能未传值（undefined）
}
sum4(1,2)
sum4(1)

/**
 * ! 函数类型-参数默认值
 * ! 和js一样我们同样可以给TS设置默认值,但是带有默认值的参数一定要在没有默认值的参数的后面
 */
function sum5(a: number, b: number = 6) {
  return a + b;
}
console.log(sum5(1, 5)); // 6
console.log(sum5(1)); // 7

/**
 * ! 函数类型-rest参数
 * ! rest参数就是剩余参数,指除了真正的形参之外传递过来的额外的所有参数
 */
function sum6(age: number, ...rest: number[]) {
  let num: number = 0;
  for (let i = 0; i < rest.length; i++) {
    num += rest[i];
  }

  let avg = (num + age) / (rest.length + 1);
  return avg;
}

console.log(sum6(22, 20, 20, 20, 20, 20, 20));
