
// storing data object in object
var Details = {Name: 'P.Murali Krishna',
               Grade: 10,
               Section:'A',
               subject:{
                   Maths : 80,
                   Science: 75,
                   Social : 78
               },
                Address : {
                   city: 'kurnool',
                   pincode: 518347
               }
}


console.log(Details)                      // To print complete object

console.log(Details.Name)                 // To print  required value in an object

console.log(Details.subject['Maths'])     //to print object in object

console.log(Details.subject.Maths)        //to print object in object with dot notation

//  storing Objects in Array

var students = [
       {name: 'P.Sai',class: 8,section: 'A'},
       {name: 'P.murali',class: 9,section: 'B'},
       {name: 'P.kittu',class: 10,section: 'A'}
]

console.log(students);

console.log(students[1]);

console.log(students[2].class)

