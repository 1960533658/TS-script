// /**
//  * ! 默认情况下,接口中定义的属性可读可写: 但是关键字readonly, 定义的属性值,不可以进行修改,强制修改后报错
//  */
// interface onlyInterface {
//   readonly name2: string,
//   age: number
// }
// let getOnly: onlyInterface = (name, age): any => {
//   name = "sdsd"
//   if (age) {
//     console.log(`我的名字叫${name},我今年${age}`);
//   } else {
//     console.log(`我的名字叫${name}`);
//   }
// }
// getOnly(
//   {
//     name2: '张三',
//     age: 12
//   }
// )

interface onlyInterface {
  readonly name2: string,
  findAge(): void
}
const get2: onlyInterface = {
  name2: "张十三",
  findAge():void {
    console.log(123);
  }
}
get2.findAge()
console.log(get2.name2);

