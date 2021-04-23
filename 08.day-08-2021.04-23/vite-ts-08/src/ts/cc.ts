// 1.
// class User {
//   public nickname: string | undefined
//   public group: number = 20
// }
// class Log {
//   public count: number = 10
//   public keyword: string | undefined
// }
// function typeGuard(arg: User | Log): number | string | undefined {
//   if (arg instanceof User) {
//     return arg.group
//   }
//   if (arg instanceof Log) {
//     return arg.count
//   }
// }
// let user = new User();
// console.log(typeGuard(user))  // 输出结果20

// 2.
// interface Cat {
//   name: string
//   miao: () => string
// }
// interface Dog {
//   name: string
//   wang: () => string
// }
// const Animal1 = (): Cat => {
//   return {
//     name: "",
//     miao: (): string => { return "2333" }
//   }
// }
// let obj1 = Animal1();
// obj1.miao()  //报错


// 3
// type strType = string | number | boolean;
// var str: strType;
// str = true;  // ?成功赋值
// str = "字符串"  // ? 成功赋值
// str = 12    // ? 成功赋值
// str = {}    // ? 不能将“{}”类型赋值给类型 “strType”


// 4
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//   if (typeof n === 'string') {
//     return n;
//   } else {
//     return n();
//   }
// }

// console.log(getName('aaa'))   // ? ("aaa")
// console.log(getName(function () { return "张三" })) // ? "张三”
// console.log(getName(function () { console.log(11) }))
//  // ? 不能将void类型返回给string类型  函数 “function () { console.log(11) }”没有返回值，当n（）执行完这个函数之后返回值是void类型 而void类型是无法通过类型别名Name（string）的，导致返回值无法通过


// 5
// interface Motorcycle {
//   vType: "motorcycle";
//   make: number;
// }
// interface Car {
//   vType: "car";
//   transmission: number;
// }
// interface Truck {
//   vType: "truck";
//   capacity: number;
// }
// type Vehicle = Motorcycle | Car | Truck;
// function evaluatePrice(vehicle: Vehicle) {
//   switch (vehicle.vType) {
//     case "motorcycle":
//       return vehicle.make * Math.PI
//     case "truck":
//       return vehicle.capacity * Math.PI
//     case "car":
//       return vehicle.transmission * Math.PI
//   }
// }
// const myTruck: Truck = { vType: "truck", capacity: 9.5 };
// console.log(evaluatePrice(myTruck));
