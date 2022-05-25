var arr = [2,2,3,5]

Array.prototype.hii = function(value){
    
    this[-1] = value
}


arr.hii(5)
console.log(arr)


class person{
    constructor(n,a){
        this.name = n
        this.age = a
    }
}

let person1 = new person('murali',27)


class student extends person {
    constructor(x,b){
        super(x,b)
    }
}
let student1 = new student('sai',25)
console.log(student1)

// Encapsulution

class lecture {
    constructor(n,a){
        var name;
        var age;
    }

    set(n){
        this.name = n
    }
    get(){
        return this.name
    }

}
let L = new lecture()

L.set('Murali')
console.log(L.get())