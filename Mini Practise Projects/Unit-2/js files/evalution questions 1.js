
//  Q:  Given two integers N, X. Find the value of the series: 1 + x + x*x + x*x*x + x*x*x*x +----N.
//      Where N is the no. of term,X contains the value of x.
//      Note : If N <= 0 or X <= 0 print -1

var N = 3; X = 2; sum = 1
if(N <= 0 || X <= 0){
    console.log(-1);
}
else if (N == 1){
    console.log(sum);
}
else if (N > 1){
    for(i=1;i<N;i++){
        sum= sum+X**i
    }
    console.log(sum);
}

//  Q:  