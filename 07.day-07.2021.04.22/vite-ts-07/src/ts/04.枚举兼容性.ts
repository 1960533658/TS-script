// 枚举兼容性

// 数字美剧与数值兼容
// enum Gender {
//   Male,
//   Female
// }

// let value = Gender.Male;
// value = 0;

// 数字枚举与数字不兼容

// enum Gender {
//   Male,
//   Female
// }

// enum Animal {
//   Cat,
//   Dog
// }

// let a = Gender;
// let b = Animal;
// a = b // 类型“typeof Animal”缺少类型“typeof Gender”中的以下属性: Male, Female
// b = a // 类型“typeof Gender”缺少类型“typeof Gender”中的以下属性: Cat, Dog
// Gender = Animal // 无法分配到“Gender”，因为它不是变量
// Animal = Gender // 无法分配到“Gender”，因为它不是变量

// 字符串枚举与字符串不兼容

enum Gender {
  Male,
  Female
}

enum Animal {
  Cat,
  Dog
}

// let str = "sdsds";
// str = Gender.Female;

// Gender.Male = str