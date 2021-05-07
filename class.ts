class Person {
    constructor(name) {
        this.name = 'Davis';
        console.log(this.name + 'Person');
    }
    static run () {
        console.log("Person running");
    }
}

var p = new Person(name);
Person.run();

class InheritAbstruct extends Person {
    constructor(name) {
        super(name);
        console.log(name + ' InheritAbstruct');
    }

    static run () {
        return super.run();
    }
}

var abc = new InheritAbstruct("Davis");