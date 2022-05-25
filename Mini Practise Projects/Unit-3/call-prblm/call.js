function details(N,S,L){
    this.name = N
    this.skill = S
    this.leave = L
    this.borrow = function(s){
        console.log(`${this.name} is ${s}`)
    }
}

var persion1 = new details('Amar','singer','Goa')
var persion2 = new details('Akbar','chef','Mumbai')
var persion3 = new details('Anthony','Magician','Kashmir')

persion1.borrow.call(persion2,persion1.skill);
persion2.borrow.call(persion3,persion2.skill);
persion3.borrow.call(persion1,persion3.skill);