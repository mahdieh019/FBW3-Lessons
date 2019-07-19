class Pet{
    constructor(name , color){
        this.name=name;
        this.color=color;
    }
    writeName(){
        document.write("Pet name is "+this.name);// document.write(`Pets color is ${this.color}`)
    }
    getName(){
        return this.name;
    }
    getColor(){
        return this.color;
    }
    writeColor(){
        document.write(" and its color is "+this.color);
    }
}
let p=new Pet("lolo","gray");


class Cat extends Pet{
    constructor(name,color,age,sound){
        super(name, color);
        this.age=age;
        this.sound=sound;
    }
    writeAge(){
        document.write(`and it is ${this.age} years old`);
    }
    
    sounds(){
        document.write(`and its sound is ${this.sound}`);
    }
}
const c=new Cat("kiki","broun",10,"mio");

class Dog extends Pet{
    constructor(name,color,owner,address){
        super(name,color);
        this.owner=owner;
        this.address=address;

    }
    WriteAddress(){
        document.write(` and where it lives is ${this.address}`);
    }
    writeOwner(){
        document.write(` and ${this.owner} is its owner`);
    }
}
const d=new Dog("Popi","black","Maria","HamburgerStraße 15");
d.writeName() + d.writeColor()+d.WriteAddress()+ d.writeOwner();

//////////////////////////////////////////////////////////////////////
