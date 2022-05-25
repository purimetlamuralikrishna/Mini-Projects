/*
//  Q:  fine prime numbers
isprime = true;
var num = 15
if(num==1){
  console.log('is a prime')
}
else if(num > 1){
  for(i = 2;i<num;i++){
    if(num % i == 0){
      isprime = false;
      break;
    }
  }
  if(isprime){
    console.log('Yes')
  }
  else{
    console.log('No')
  }
}

//  Q:  factorial of num

var i = 1; num = 5 ; sum_of_factorial = 1;bag = ''
console.log(num+'!'+' '+'is');
for(i=1;i <= num;i++){
  sum_of_factorial = sum_of_factorial*i;
  bag = bag + i+ ' ';
}
console.log(bag);
console.log(num+' '+'factorial is', sum_of_factorial)


//  Q:  Print multiple of 2 values in b/w 1 to 10  
var multiple = 2;
for(i = 1;i<=10;i++){
  if(i*multiple <= 10){
    console.log(i*multiple)
  }
}

//  Q:  Find Sum 1 to N
var n = 5;sum = 0
for(i=1;i<=n;i++){
  sum = sum+i
}
console.log(sum)
*/

//  Q:   Droping guests 1 to 10 (statements;break & continue)
for(guest= 1;guest<=10;guest++){
  if(guest == 5){
    continue;
  }
  console.log(guest)
}