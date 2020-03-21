// ES 6 中class 关键字是实现面向对象的新形式

function Person (name , age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person('zhicheng zhou', 18);

Person.prototype.play = function () {
    console.log("i want to play");
}


//通过new出来的实例 访问到的属性 叫做实例属性
console.log(p1.age, p1.name);
console.log(p1.play());
// 创建一个类
// 类里面只能定义构造函数 静态属性 实例属性 静态方法 实例方法 就这么多
// 所以我们把class 称做语法糖
class Animal {


    // 和java 一样 如果没有定义构造器 那么可以认为类内部有一个隐形的 看不见的空构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static info = "zzzz";
}

const animal  = new Animal('dog', 3);

console.log(animal.name, animal.age, Animal.info);