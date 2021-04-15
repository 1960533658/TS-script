/**
 * ! 抽象类
 * ! TS中的抽象类是提供其他派生类的基类，但是不能直接被实例化。我们可以用abstract官架子来定义抽象类和抽象类中的方法
 * 
 */

abstract class PoorFather {
  abstract getMoney(money: number):void
}
class RichSon extends PoorFather {
  getMoney() {
    console.log("我有钱");
    
  }
}
let long = new RichSon();
// new PoorFather()// 无法创建抽象类的实例
long.getMoney()