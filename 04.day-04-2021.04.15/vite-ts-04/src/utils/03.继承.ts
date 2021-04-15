/**
 * 类的继承
 * 继承的语法 extends
 * 继承的应用场景 vue和react中组件中的ts写法
 * 
 * 基类（父类）
 * 
 * 
 * 派生类（字类）
 */

// 基类
class Animal {
  age: number;
  constructor(age: number) {
    this.age = age
  };
  eat():void {
    console.log("吃嘛嘛香");
  }
}

// 派生类
class Mouse extends Animal {
  name: string;

  constructor(name: string) {
    super(1);
    this.name = name;
  }

  dadonmg() {
    console.log(`${ this.name }会打洞`);
  }
  

}

// 实例化对象
let Jerry = new Mouse("Jerry");
Jerry.dadonmg()
Jerry.eat()
console.log(Jerry.name);

