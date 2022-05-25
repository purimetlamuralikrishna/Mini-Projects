

document.querySelector('#form').addEventListener('submit',checkoutfun)



function checkoutfun(){
     event.preventDefault()

     alert('Your order is accepted ')
    
    var packed =  setInterval(function(){
         alert('Your order is being Packed ')
         clearInterval(packed)
     },3000)

    var transit= setInterval(function(){
        alert('Your order is in transit')
        clearInterval(transit)
    },8000)

   var delivery =  setInterval(function(){
        alert(' Your order is out for delivery ')
        clearInterval(delivery)
    },10000)

   var delivered = setInterval(function(){
        alert('Order delivered')
        clearInterval(delivered)
    },12000)
}