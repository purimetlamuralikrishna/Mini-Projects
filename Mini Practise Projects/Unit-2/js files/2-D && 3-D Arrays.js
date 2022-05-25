var arr2 = [[2,4,5],[65,8,7],[8,7]];

for(i=0; i<arr2.length; i++){
    for(j=0; j<arr2[i].length; j++){
        console.log(arr2[i][j])
    }
}

var arr3 = [
        [[32,45,6], [42,41,97,45]],
        [[34,56,43,78,65,66,44], [45,68,33,22,76]],
        [[34,65,77,43],[45,77,34,23]],
]



for(i=0; i<arr3.length; i++){
    for(j=0; j<arr3[i].length; j++){
        for(k=0; k<arr3[i][j].length; k++){
            console.log(arr3[i][j][k])
        }
    }
}