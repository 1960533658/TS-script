/**
 * ! 默认情况下一个变量（对象）是相应的接口类型，那么这个变量(对象)必须实现接口中所有的属性和方法
 * ! 但是开发中为了让接口更加灵活,某些属性我们可能希望设计成可选的,这个时候就可以使用可选属性
 */
interface userInterface1 {
  name: string,
  age?: number
}

// 接口，名称命名规范 xxInterface Ixxx
let getUserInfo1 = ({ name,age }: userInterface1): void => {
  console.log(`我的名字叫${name}${age}`);

}
getUserInfo1({
  name: "tly",
})