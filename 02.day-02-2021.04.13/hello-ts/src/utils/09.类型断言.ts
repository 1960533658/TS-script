/**
 * 类型断言：
 * * 有时候你会遇到这种情况你会比TypeScript更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比他
 * * 现有的类型更确切的类型
 * ! 通过类型断言这种方式可以确切的告诉编译器，类型断言好比其他语言里的类型转换，但是
 * ! 但是不进行特殊的数据检查和结构。它没有运行时的影响，只在编译阶段起作用
 */

// as 语法
let someValue: any = "this is a String";
let strLength = (someValue as string);
console.log(typeof strLength)
/**
 * TODO 注意：一般都是把any转换为其他类型
 * ts已经有一个类型了，但是你心里明白 你想要的是什么值
 * TODO 会给被赋值的变量限定类型（被复制的变量不应该直接给它限定类型，这样会使as语法的添加限定类型失去意义，也同样会报错）
 * TODO 所以优先是第11行书写方式，而不应该是
 * TODO let strLength: string = (someValue as string);
 * TODO 给strLength先限定类型
 */