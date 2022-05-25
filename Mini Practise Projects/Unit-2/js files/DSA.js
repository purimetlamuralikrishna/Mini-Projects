
//  Q:  Electricity bill

var N = 930; charges = 80;
N = N-charges;

if(N<=150){
    console.log(N/3)
}
else if(N<=650){
    console.log(50+(N-150)/5);
}
else{
    console.log(150+(N-650)/10)
}
