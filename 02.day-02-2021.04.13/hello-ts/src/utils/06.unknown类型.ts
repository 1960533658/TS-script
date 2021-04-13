/**
 * unknown类型
 * TODO 就像所有的类型都可以赋值给any， 所有的类型也都可以赋值给unknown成为TypeScript类型系统的零一和顶级对象（另一种是any）
 */
let value: unknown;
value = 5;
value = "1";
value = true;
// let c: boolean = value;// 不能将类型“unknown”分配给类型“boolean”。
// ? unknown类型只能赋值给any类型和unknown类型的本身
// ? 当进行赋值的时候，只有当被赋值的元素可以接受值的变量申明的类型的时候才能进行正常的接收赋值