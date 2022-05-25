// Q:   Given the year of birth, if the age is between 13 and 19 (both included)
//      print "Teenage" and in between 20 and 29 (both included) print "Twenties".
/*
var year = 2009;
var age = 2022 - year;
console.log(age);
if(age >= 13 && age <=19){
    console.log('Teenage')
}
else if(age >= 20 && age <= 29){
    console.log('Twenties')
}

// Q:   Given any character, if it is a vowel print “Vowel”.

var character = 'b';
switch(character){
    case 'a':
        console.log('Vowel')
        break;
    case 'e':
        console.log('Vowel')
        break;
    case 'i':
        console.log('Vowel')
        break;
    case 'o':
        console.log('Vowel')
        break;
    case 'u':
        console.log('Vowel')
        break;
    default:
            console.log('character is consonant');
}

// Q:    Given and character if it is a consonant print “Consonant”.

var character = 'a'
if(!(character == 'a' || character == 'e' || character == 'i' || character =='o' || character == 'u' )){
    console.log('character is a Consonant');
}
else{
    console.log('character is a Vowel')
}
//       2nd way
if(character !== 'a' &&  character !== 'e' && character !== 'i' && character !=='o' && character !== 'u' ){
    console.log('character is a Consonant')
}
else{
    console.log('character is a Vowel')
}
*/
//  Q: Given 4 numbers (all different values), print which is greatest.

var a = 10; b = 20; c = 40; d = 35
if(a > b || a > c || a > d){
    console.log('a is greater')
}
else if(b > c || b > d){
    console.log('b is greater')
}
else if(c > d){
    console.log('c ic greater')
}
else{
    console.log('d is greater')
}
