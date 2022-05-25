/*

var N = 4; count = 0; 

for(i=1;i<=N; i++){
    bag = ''
    for(j=1; j<=N; j++){
        count++
        bag = bag + count +' '
    }console.log(bag)
}



//  Q:  A number stored in a variable with the name num.You have to print num lines
//      and on each line print all the numbers from 1 to the value stored in num.

var num = 5;

for(i=1; i<= num; i++){

     var bag = ''
    for(j=1; j<=num; j++){

        bag = bag + j + ' '
    }console.log(bag)
}


//  Q:  Print stars indifferent formate

var num = 5
for(i=1; i<=num; i++){

    var bag = ''
    for(j=1; j<=i; j++){
        bag = bag + ' '
    }
    var jhola = bag
    for(k=1; k<=num-i; k++){
        jhola = jhola + '*'
    }console.log(jhola)
}

//  Q:  Given a number with a variable name num.Print num lines such that there are numbers from 1 to i, 
//      such that on each line you print only one number.Also,i represents all the numbers from 1 to num

var num = 5;
for(i=1; i<=num; i++){
    for(j=1; j<=i; j++){
        console.log(j)
    }
}

//  Q:  Given a number with variable name N.You have to print N lines such that on each line you
//      find the sum of all even numbers in the range of[1,i],
//      whereirepresents all the numbers in the range of[1,N].

var N = 5;
for(i=1;i<=N; i++){
    sum = 0;
    for(j=1; j<=i; j++){
        if(j%2===0){
            sum = sum+j
        }
    }console.log(sum)
}
*/

