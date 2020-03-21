//这是父类 大家可以直接把父类理解成 原型对象 prototype
// 语法 class extends
class Humain {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
}


class American  extends  Humain{
    constructor(name , age) {
        super(name , age); //一定要写super() 子类中的super 其实就是父类中 constructor构造器的一个引用
    }
}

const a1  = new American('jack', 20);

console.log(a1);

class chinese extends Humain{
    constructor(name , age) {
        super(name , age); //一定要写super() 子类中的super 其实就是父类中 constructor构造器的一个引用
    }
}

const c1  = new American('zhicheng', 22);

console.log(c1);