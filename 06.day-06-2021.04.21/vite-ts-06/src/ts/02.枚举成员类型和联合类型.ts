// 1.枚举成员类型

// enum Gender {
//   Male = "aaa",
//   Female = "bbb"
// }

// interface PersonInterface {
//   gender: Gender.Male
// }

// class Person implements PersonInterface {
//   gender: Gender.Male;
//   constructor() {
//     this.gender = "aaa" // 不能将类型“"aaa"”分配给类型“Gender.Male”
//     this.gender = Gender.Male
//   }
// }

// enum Gender {
//   Male ,
//   Female
// }

// // 人接口

// interface PersonInterface {
//   gender: Gender.Male
// }


// // 类实现人的接口
// class Person implements PersonInterface {
//   gender: Gender.Male

//   constructor (){
//     this.gender = 1;
//   }
// }

// 之前的版本可以使用字符串枚举来声明 接口的类型
// & 注意： 当前版本不可以使用字符串作为i接口的类型，只能使用数字枚举

// ? 什么是联合枚举类型
// ! 联合枚举类型是将多种数据类型通过 | 链接起来
// ! 我们可以吧枚举类型给你当作一个联合类型来使用

// enum Gender {
//   Male,
//   Female
// }

// interface PersonInterface {
//   gender: (Gender.Male | Gender.Female)
// }

// class Person implements PersonInterface {
//   gender: (Gender.Male | Gender.Female)
//   constructor() {
//     this.gender = 1
//   }
// }