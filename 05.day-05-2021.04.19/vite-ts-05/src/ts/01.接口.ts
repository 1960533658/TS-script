// 定义接口函数getUserInfo，互殴用户姓名和年龄的字符串
interface userInterface {
  name: string,
  age: number
}

// 接口，名称命名规范 xxInterface Ixxx
let getUserInfo = ({ name, age }: userInterface): void => {
  console.log(`我的名字叫${name},我今年${age}`);
  
}
getUserInfo({
  name: "tly",
  age: 12
})