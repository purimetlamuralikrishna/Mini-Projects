/*
var a = 10;
var b = 10;
b++;  // post increment
++a;  // pre increment
console.log(a);
console.log(b);
var c = 10
var d = 10
c--;  //  post decrement
--d;  //  pre  decrement
console.log(c)
console.log(d)

//  Q:  Print the numbers from the given starting point till ending point (including both start and end)
var starting_point = 0
var end_point = 25
while(starting_point <= end_point){
 console.log(starting_point++)
}

//  Q:  Print the odd numbers from 0 till the given limit 50
var odd = 1
while(odd <= 50){
    if(odd % 2 == 1){
        console.log(odd)
    }
    odd++
}

//  Q:  Print the sum of all the multiples of 3 from 0 to the given limit 20
var multiple = 3
var i = 0
var sum = 0
while(i <= 20){
    if(i % 3 ==0){
        sum = sum + i
    }
    i++
}
console.log(sum)
*/
//  Q:  Print the average of even numbers from 1 to 100 (both included)
i = 1
sum = 0
n = 0
while(i <= 100){
    if(i % 2 == 0){
        sum = sum + i
        n++
    }
    i++
}
console.log(sum / n);