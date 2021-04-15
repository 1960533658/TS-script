/**
 * 类型守卫-类型别名
 * ! 让多种数据类型通过type自定义在一个变量中,让它保存复数量的数据类型
 */
type sssy = string | number | boolean | undefined;
let xyz: sssy = 6;
xyz = "123";
xyz = undefined;
xyz = "123";
xyz = true;