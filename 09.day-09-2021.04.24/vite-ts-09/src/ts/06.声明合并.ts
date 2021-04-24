/**
 * & 在ts中接口和命名空间是可以重名的， ts会将多个同名的和名为一个
 * * 同名接口如果属性名相同，那么属性类型不许一直
 * * 同名接口如果数显同名函数，那么就会成为一个函数的重载
 */
interface Person {
  name: string
  stu(num1:number,num2: number) : void
}

interface Person {
  name: string
  stu():void
}

class Man implements Person {
  name: string
  constructor() {
    this.name = "name"
  }
  stu(num1?: number, num2?: number) {
    if (num1 && num2) {
      console.log(num1+num2);
    }
  }
}

/**
 * & 命名空间
 * * 同名的命名空间可以出现同名的变量，方法等，因为他们是独立的
 * * 同名的命名空间中其它命名空间没有通过export导出的内容是获取不到的
 * * 同名空间除了可以和同名的接口合并，还可以和类/喊出/枚举合并
 */
namespace valiTion {
  let numRegeXp = /^[a-zA-Z]+$/
  // function a() {
    
  // }
  // function a() {
    
  // } 函数实现重复
  export const test1 = (value: any): boolean => numRegeXp.test(value)
}

namespace valiTion {
  let numRegeXp2 = /^[a-zA-Z]+$/
  // function a() {

  // }
  // function a() {

  // } 函数实现重复

  export const test2 = (value: any): boolean => numRegeXp2.test(value)
}
valiTion.test1("222")
// 接口、命名空间
namespace Person1 {
  let name = "zhangsan"
}

interface Person1 {
  age: number
}

class Man1 implements Person1 {
  age = 5
}

let jerry = new Man1()
console.log(jerry);

// 和类合并
namespace Person2 {
  let name = "sjhasd"
}
interface Person2 {
  age: number
}
class Man2 implements Person2 {
  age: number
  constructor() {
    this.age = 21
  }
  study() {

  }
}

let jerry2 = new Man2()
console.log(jerry2);

// 和函数合并 
// & 函数必须放在命名空间的前面

function Person3() {
}
namespace Person3 {
  let name = "sdsadsa"
}


// 和枚举合并
namespace Gender {
  let name = "sdsd"

  export const fn = () => {
    if (Gender.Female) {
      console.log(111);
      
    }
  }
}

enum Gender {
  male,
  Female
}

console.log(Gender);
Gender.fn()