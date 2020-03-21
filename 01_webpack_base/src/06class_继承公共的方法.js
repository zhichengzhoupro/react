//这是父类 大家可以直接把父类理解成 原型对象 prototype
// 语法 class extends
class Humain {



    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("hello " + this.name);
    }
}


class American  extends  Humain{

}

const a1  = new American('jack', 20);

console.log(a1.sayHello());

class chinese extends Humain{
    constructor(name, age, idCard) {
        super(name, age);
        this.idCard = idCard;
    }
}

const c1  = new American('zhicheng', 22);

console.log(c1.sayHello());