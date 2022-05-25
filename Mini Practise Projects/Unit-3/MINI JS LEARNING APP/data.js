var scope = 
    {
        1:"Scope in JavaScript refers to the accessibility or visibility of variables.",
        2:"which parts of a program have access to the variable or where the variable is visible.",
        3:"There are 3 thpes of scopes in JS 1-Global Scope,2-Functional Scope,3-Block Scope",
        4: "The varables outside a function are in Global scope ",
        5:"The varibles declared in a function are local to that function.They are called local varibles and cannot accessed in Global Scope",
        6:"Variables that you declare inside a block {} using let or const are limited only to that block.",
}


var hoisting = {
    1:"Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program",
    2:"It doesn't care about variable values. All it wants to know what variables are present in a program.",
    3:"In simple word's hoisting means taking attendence",

}


var constructor_functions={
    1:'We can create an Object By using a function',
    2:"This method of creating an Object by using function is called constructor function",
    3:'here we use 2keyword for this process. They are "this","new"',
    4:'"this" keyword refers the object which is called',
    5:'"new" keyword used to create new Object'
}


var prototype={
    1:'Prototype means blueprint',
    2:'An original object from which new object is created',
    3:'By using a prototype we can use the one method created in an object into an another object'
}

localStorage.setItem('scope',JSON.stringify(scope))
localStorage.setItem('hoisting',JSON.stringify(hoisting))
localStorage.setItem('constructor_functions',JSON.stringify(constructor_functions))
localStorage.setItem('prototype',JSON.stringify(prototype))
