/**
 * ? 什么是可辨识联合
 * * 具有共同特征
 * * 一个类型别名, 包含了共同的可辨识特征的类型联合
 */

// 正方形
interface Square {
  kind: "square";
  size: number
}

// 长方形
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number
}

// 圆形
interface Circle {
  kind: "circle";
  radius: number
}

type Shape = Square | Rectangle | Circle;
// 写一个功能计算面积
// 根据可辨识特征来响应的计算
function getArea(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size      
    case "rectangle":
      return s.height * s.width
    case "circle":
      return Math.PI* (s.radius * s.radius)
  }
}

console.log(getArea({
  kind: "rectangle",
  width: 1,
  height: 2
}));


/**
 * ? 什么是可辨识联合的完整性检查
 * * 开启严格模式+ 韩式的返回值类型
 * * Never
 */
