function myarray(){
    Object.defineProperty(this, "length", {
      value: 0,
      writable: true,
      enumerable: false,
    });
    this.length = arguments.length
    for(let i=0;i<this.length;i++){
      this[i]=arguments[i]
    }
  }
  
  
  
  myarray.prototype.push = function(value){
    let index = this.length;
    this[index] = value
    this.length++
  }
  myarray.prototype.pop=function(){
    var index = this.length-1
    delete this[index]
    this.length--
  }
  myarray.prototype.top = function(){
    var index = this.length-1
    return this[index]
  }
  myarray.prototype.print= function(){
    return Object.values(this)
  }
  myarray.prototype.printReverse = function(){
    let arr1 = []
    for(let i=this.length-1;i>=0;i--){
      arr1.push(this[i])
    }
    return arr1
  }
  myarray.prototype.size=function(){
  return this.length
  }
  
  
  
  
  let arr = new myarray(1,2,5)
  var obj = new myarray(2,5,6)
  
  console.log(arr,obj)
  
  
  arr.push('h')
  arr.pop()
  var x = arr.top()
  var y = arr.print()
  var z = arr.printReverse()
  var s = arr.size()
  
  
  console.log(x,y,z,s)