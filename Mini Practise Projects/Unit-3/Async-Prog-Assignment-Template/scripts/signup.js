



document.querySelector('#form').addEventListener('submit',signin)

var user_details = JSON.parse(localStorage.getItem('user_details')) || []

function signin(){

    event.preventDefault()

    var name = document.querySelector('#name').value
    var number = document.querySelector('#number').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    if(name === "" || number === "" || email === "" || password===""){
        alert('please fill the details')
    }
    if(number.length < 10){
        alert('please fill ten digits number')
    }

    var obj = {
        Name : name,
        Number:number,
        Email:email,
        Password:password,
    }

    user_details.push(obj) 

   localStorage.setItem('user_details',JSON.stringify(user_details))

}