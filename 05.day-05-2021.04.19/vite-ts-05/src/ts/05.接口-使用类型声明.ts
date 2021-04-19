type funcType =
  (name: string, age: number, address: string) => string;

let getType: funcType = (name, age, address): string => 
   `我的名字叫${name},我今年${age}, 我家在${address}`


let getTypereturn = getType("sd", 23, "zhongguo");
console.log(getTypereturn);

/**
 * & interface和type的区别
 * * interface能进行声明合并
 * 
 * * type可以进行基本类型别名,联合类型,元组等类型
 * * type语句还可以使用type获取实例的类型进行赋值
 */