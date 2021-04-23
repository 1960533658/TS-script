// 类型守卫
// typeof

let fn = (x: number| string): number | string => {
  // 如果是string 就调用length
  if (typeof x == "string") {
    return x.length
  } else {
    return x.toFixed();
  }
  // 如果是number, 那么就调用 tofixed
}

// instanceof

class Dog {
  name: string
  constructor() {
    this.name = "ssss"
  }
}

class Cat {
  age: number
  constructor() {
    this.age = 2
  }
}

function fn1(): string | number {
  let num = Math.random()
  let res = num >= 0.5 ? new Dog(): new Cat()
  // 如果是Dog就返回dog
  if (res instanceof Dog) {
    return res.name
  } else {
    return res.age;
  }
}
console.log(fn1());
