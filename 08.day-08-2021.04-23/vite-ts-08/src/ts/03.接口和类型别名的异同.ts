type uniType = string | number | boolean | symbol;
let value: uniType;

value = 5;
value = true;
value = "aaa";

// 接口和类型别名的一同
// 都可以描述属性和方法
// interface PersonInterface {
//   name: string;
//   study(): void;
// }

// type PersonType = {
//   name: string;
//   study() : void
// }

// let obj1: PersonType = {
//   name: "dsadsad",
//   study() {
//     console.log(111);
//   }

// }

// let obj2: PersonType = {
//   name: "Type",
//   study() {
//     console.log(222);
//   }
// }





// 都允许拓展
// 接口拓展 extends
interface PersonInterface {
  name: string;
  study(): void;
}

interface MainInterface extends PersonInterface {
  age: number;
}

class Man implements MainInterface {
  name: string;
  age: number;
  constructor() {
    this.name = "zs"
    this.age = 123
  }
  
  study() {
    console.log(333);
  }
}
// 类型别名拓展 &
type PersonType = {
  name: string;
  study(): void
} & {
  age: number
}

let obj2: PersonType = {
  name: "Type",
  age: 2333,
  study() {
    console.log(222);
  }
}
// type 可以声明基本类型别名 联合类型元组类型 interface不能

// type str = string;
// type str1 = [string, number, boolean];
// let s: str = "aaa"
// let arr: str1 = ["123", 123, true]


// interface typeInterface {
//   name: string
// }

// interface typeInterface =  str


// type 不会自动合并

// interface PersonInterface {
//   name: string
// }

// interface PersonInterface {
//   age: number
// }

// interface PersonInterface {
//   ye: string
// }
// interface PersonInterface {
//   er: string
// }

// class Family implements PersonInterface {
  
// }
// 报错 类型“Family”缺少类型“PersonInterface”中的以下属性: name, study, age, ye, er

// type PersonType = {
//   name: string
// } & {
//   address: string
// } & {
//   age: 123
// }

     

// let sdsd: PersonType = string
