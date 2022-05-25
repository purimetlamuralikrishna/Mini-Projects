

class family{
    constructor(n,a,r){
        this.name = n
        this.age = a
        this.relation=r
    }
}

class member extends family{
    constructor(n,a,r){
        super(n,a,r)
    }
}

var member1 = new member('nagaraju',60,'father')
var member2 = new member('vijayamma',55,'mother')
var member3 = new member('kittu',30,'sister')
var member4 = new member('sai',25,'brother')
console.log(member1)


class cat{
    constructor(n,c,l){
        this.name = n
        this.climb_tree = c
        this.lives = l
    }
}

class animal extends cat{
    constructor(n,c,l){
        super(n,c,l)
    }
}

var tiger = new animal('tiger',false,'forest')
console.log(tiger)


class userdetails {
    constructor( ){
        let user_Name;
        let user_id;
        let password;
    }

    setdetails(n,i,p){
       this.user_Name = n
       this.user_id = i
       this.password = p
    }

    getdetails(){
        return [this.user_Name,this.user_id,this.password]
    }

}

var person = new userdetails()
person.setdetails('murali','kri0852',5852)
console.log(person.getdetails())



class student_details{
    constructor(n,a){
        this.name = n
        this.age = a
        this.unit_scores = {}
    }


    addscores(S1,S2,S3){
        this.unit_scores.DSA = S1
        this.unit_scores.Coding = S2
        this.unit_scores.CSBT = S3
    }
}

var student1 = new student_details('Murali',27)
student1.addscores(5,7,5)
console.log(student1)


class vechicle {
    vechicle = {
        name : "vechicle"
    }

    vechiclename(){
        console.log(`This is a ${this.vechicle.name}`)
    }
}

class car extends vechicle{
    vechicle={
        name : 'Car'
    }
    vechiclename(){
        console.log(`This is ${this.vechicle.name}`)
    }
}

class truck extends vechicle{
    vechicle={
        name : 'Truck'
    }
    vechiclename(){
        console.log(`This is ${this.vechicle.name}`)
    }
}

var v1 = new vechicle()
var v2 = new car()
var v3 = new truck()


v1.vechiclename()
v2.vechiclename()
v3.vechiclename()



