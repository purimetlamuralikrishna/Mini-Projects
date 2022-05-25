function automobile(M,W,E,C,G,S,F){
    this.model = M
    this.wheels = W
    this.engine = E
    this.color = C
    this.gear = G
    this.seating = S
    this.fuel_type = F
}


var TATA_Safari = new automobile('safari',4,'ES6','White','Automatic',6,'petrol')



var TATA_ertiga = Object.create(new automobile('ertiga',4,'ES6','White','Automatic',6,'petrol'))


console.log(TATA_Safari,TATA_ertiga)

