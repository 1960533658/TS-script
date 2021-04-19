/**
 * 类实现接口
 * 
 * ? 为什么使用类实现接口的方法,而不直接定义使用接口
 * ! 在代码设计中,接口是一个规范, 接口通常用于定义某种规范,是你必须遵守的协议
 * ! 站在程序的角度上说接口之规定了类里必须提供的属性和方法,从而分离了规范和实现,增强了系统的可拓展性和可维护性
 */
interface mouseInterface {
  color: string,
  brand: string,
  run(): void
}

// 类实现接口
class Benchi implements mouseInterface {
  color: string
  brand: string

  constructor(color:string, brand: string) {
    this.color = color;
    this.brand = brand
  }

  run() {
    console.log(`我开着${this.color}的${this.brand}车奔驰在草原上`);
  }
}

let x5 = new Benchi("red","宝马X5")
x5.run()