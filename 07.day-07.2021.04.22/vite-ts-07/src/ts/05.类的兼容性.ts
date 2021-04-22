// 类的兼容性

// 1.只比较实例成员, 不比较构造蛤属和静态成员

class Perosn {
  name: string
  age: number
  static family: string;
  constructor() {
    this.name = "zs";
    this.age = 16
  }
}

class Teacher {
  name: string
  age: number
  static family: string
  constructor() {
    this.name = "ww";
    this.age = 23
  }
}

let person = new Perosn();
let teach = new Teacher();

// 两个都能相互赋值 双向协变
person = teach;
teach = person;
