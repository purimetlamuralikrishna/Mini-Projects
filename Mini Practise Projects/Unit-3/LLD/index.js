

class vechicle{
    constructor(N,R,C){
        this.name = N
        this.regnumber = R
        this.color = C

    }

    get type(){
        return this.name
    }

    set type(value){
        this.name = value
    }
}

class car extends vechicle{
    constructor(R,C){
        super('car',R,C)
    }
}


let c1 = new car('AP-21-1234','Red')

class slot{
    constructor(type,number){
        this.type = type
        this.number = number
        this.isbooked = false
    }

    get booked(){
        return this.isbooked
    }

    set booked(value){
        this.isbooked = value
    }
}


class parkingfloor{

    constructor(floornumber,maxfloor){
        this.floornumber = floornumber
        this.parkingspots = []

        for(let i=0;i<maxfloor;i++){
            if(i===0){
                this.parkingspots.push(new slot('truck',i))
            }
            else if(i===1){
                this.parkingspots.push(new slot('bike',i))
            }
            else if(i===2){
                this.parkingspots.push(new slot('car',i))
            }
        }
    }
}
