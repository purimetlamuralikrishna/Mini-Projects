
//  Q: To change given string from lower case to upper case
var str = 'murali krishna'

var lower_case = 'abcdefghijklmnopqrstuvwxyz '; upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '; var bag = '';

for(i=0; i<str.length; i++){

    for(j=0; j<lower_case.length; j++){
        if(str[i]===lower_case[j]){
            bag = bag + upper_case[j]
        }
    }
}console.log(bag)

var a= 100; b = 0

if(a===100 || b===100){
    console.log('true')
}
else if(a+b===100){
    console.log('true')
}


var fruits = ['mango','banana','banana','apple','balaya']
fruits.forEach(function(item,index,array){
    console.log(item)
})
var pos = fruits.indexOf('banana')
var last = fruits.lastIndexOf('banana')
console.log(pos,last)
  