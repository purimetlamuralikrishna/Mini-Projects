/*
//  Q:  You are given a number, stored in the variable, with the name num. Print the required value according to the following conditions
// if  num = 1, print "Monday"  num = 2, print "Tuesday"  num = 3, print "Wednesday"  num = 4, print "Thursday"
//     num = 5, print "Friday"  num = 6, print "Saturday"  num = 7, print "Sunday"
//      It is guaranteed, that the value stored in num, will be in the range from1 to 7

var num = 0;
switch(num){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('num is greater than 7 or lessthan or equal to 0')
}


//  Q:  A number stored in a variable with the name num. Print all the odd numbers lesser than 
//      or equal to num. Only those numbers need to be printed which are greater than zero


var num = 13
for(i=1; i<=num; i++){
    if(i%2==1){
        console.log(i)
    }
}

// Q: A number stored in a variable with the name num. Find the sum of all even && odd numbers sperately
//    greater than zero, and less than or equal to the value stored in num 

var num = 10; sum_of_even = 0; sum_of_odd = 0;
for(i=0; i<=num; i++){
    if(i%2===0){
        sum_of_even = sum_of_even+i
    }
    else{
        sum_of_odd = sum_of_odd + i
    }
}
console.log(sum_of_even,sum_of_odd)


//  Q:  find given num is prime or not

var num = 5; factorial= 0;
for(i=1; i<=num; i++){
    if(num%i==0){
        factorial++
    }
}
if(factorial==2){
    console.log('prime')
}
else{
    console.log('non-prime')
}

*/

//  Q: A number N. Let another number(x) floor value is deriven if 32 is divided by N.  In case x is 0, print Too Low
//     In case it is not possible to generate a valid number, print-1 .In all other cases, print x.

var N = 10; x = Math.floor(32/N);
if(x===0){
    console.log('too low')
}
else if(x===Infinity){
    console.log('-1')
}
else{
    console.log(x)
}

