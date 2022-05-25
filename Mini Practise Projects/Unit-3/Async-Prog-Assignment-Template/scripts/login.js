


document.querySelector('#form').addEventListener('submit',login)


var login_details =JSON.parse(localStorage.getItem('user_details')) || []


function login( ){

    event.preventDefault()
    
    var Email = document.querySelector('#email').value
    var Password = document.querySelector('#password').value

    

    let flag =0
    for(let i=0;i<login_details.length;i++){
        if(login_details[i].Email === Email && login_details[i].Password === Password){
        
            window.location.href = "index.html"
            flag++
        }
    }
    if(flag === 0){
        alert('invalid Credentials')
    }
   

}