

var veg= ['tomato','potato','brinjal'];
console.log(veg);

console.log(veg[0]);
console.log(veg[2]);
console.log(veg[1]);


console.log(veg.length)

veg.push('onion');          //to add elements into an existing array
console.log(veg)

veg[3]='beans'              // can change element in an array
console.log(veg)

veg.pop();
console.log(veg);           // to delete a element in an existing array(pop can only delete last element)


//  Q:  Usong array average of an even numbers in given array

var arr =[23,45,65,44,78,42,52,4,8,5,8,-2,72,5,60];

var sum = 0
var count = 0
for(i=0; i<= arr.length; i++){
    if(arr[i]%2==0)
    sum = sum + arr[i]
    count++
}console.log(sum/count)

//  average of last 6 elements in an given array(arr)

console.log(arr.length)
var index = arr.length - 6; N = 0; total = 0

for(j=index; j<arr.length; j++){
    total = arr[j] + total
    N++
}
console.log(total/N)


// to find the largest & smallest number in an array(arr)

var max = -Infinity; min = Infinity

for(k=0; k<=arr.length; k++){
    if(max<arr[k]){
        max = arr[k]
    }
    if(min>arr[k]){
        min = arr[k]
    }
}console.log(max, min)