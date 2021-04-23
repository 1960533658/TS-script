// // /**
// //  * ? 什么是可辨识联合
// //  * * 具有共同特征
// //  * * 一个类型别名, 包含了共同的可辨识特征的类型联合
// //  */

// // // 正方形
// interface Square {
//   kind: "square";
//   size: number
// }

// // 长方形
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number
// }

// // 圆形
// interface Circle {
//   kind: "circle";
//   radius: number
// }

// type Shape = Square | Rectangle | Circle;
// // 写一个功能计算面积
// // 根据可辨识特征来响应的计算
// function getArea(s: Shape) {
//   switch (s.kind) {
//     case "square":
//       return s.size ** 2    
//     case "rectangle":
//       return s.height * s.width
//     case "circle":
//       return Math.PI* (s.radius * s.radius)
//   }
// }

// console.log(getArea({
//   kind: "square",
//   size: 3
// }));

