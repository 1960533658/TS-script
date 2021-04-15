/**
 * 类型守卫-instance关键字
 * 
 * ! TS熟知JS中instanceof和typeof运算符的用法,如果你在一个条件中使用这些,TS将会推到呕出在调价块中的变量类型
 * 
 */

class Foo {
  foo = 123;
  common = "123"
}

class Bar {
  bar = 123;
  common = "123"
}

function dostuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo);
    // console.log(arg.bar);// err
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo);//err
    console.log(arg.bar);
  }
}
dostuff(new Foo());
dostuff(new Bar());