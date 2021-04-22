/**
 * 泛型只影响使用的部分,不会影响声明的部分
 * 
 * 
 */
// interface TestInterface<T> {
//   age: T
// }
// class Father implements TestInterface<number> {
//   age: number
//   constructor() {
//     this.age = 5
//   }
// }

// class Mother implements TestInterface<string> {
//   age: string
//   constructor() {
//     this.age = "5"
//   }
// }



interface TestInterface<T> {
  // age: T
}

interface PersonInterface<U> {
  // age: U
}
// let s: TestInterface<number>
// let a: TestInterface<number>
// s = a;
// a = s

// let o: TestInterface<number>
// let p: PersonInterface<number>
// o = p
// p = o