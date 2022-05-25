//   changing a string to an array
/*
var alpha = 'a,b,c'
var alphabets = [alpha]
console.log(alphabets)

// changing a character in a string

var name = 'Murali'     //change Murali to Kurli
var bag = ''
 for(i=0; i< name.length; i++){
   
    if(i==0){
        bag = bag + 'K'
        continue
    }
    else{
        bag = bag + name[i]
    }    
}
console.log(bag)

 //  remove a character from the string (removing 'a' from string 'murali')

 var bucket = ''
 for(j=0; j<name.length; j++){

    if(name[j]=='a'){
        continue;
    }
    else {
        bucket=bucket+name[j]
    }
 }
 console.log(bucket)
*/
 // Remove the elements from an array which consists of char. 'A' or 'a'

 var movies = ['Avengers','Batman','wonder women','Hulk']

 for(K=0; K<movies.length; K++){
    var x = movies[K];
     var mug = ''
    for(l=0; l<x.length; l++){
        
        if(x[l]=='A' || x[l]=='a'){
             break;
        }
        else{
            mug = mug + movies[K]
            break;
        }
    }console.log(mug)
 }
 
 
/*

 var movies = ['Avengers','Batman','wonder women','Hulk']

 movies.reverse();
 console.log(movies)



// To change number into an string

var num = 12121;
var str = num.toString()
console.log(str)
bag = ''
var index = str.length - 1
for(i=index; i<str.length; i--){
    bag =bag + str[i]
    if(i==0){
        break
    }
}
console.log(bag)

//  Q:  sub string comparision
var str = 'asdas'; count = 0
for(i=0; i<str.length; i++){
     bag = ''
    for(j=i; j<str.length; j++){
        bag = bag + str[j]
        console.log(bag)
        if(bag[0]===bag[bag.length-1])
        count++
    }
}console.log(count)

*/