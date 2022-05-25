


var itemsarr =  JSON.parse(localStorage.getItem('items')) || []

var total = 0



window.addEventListener('load',function(){
    listcartitems(itemsarr)
})

function listcartitems(itemsarr){


itemsarr.forEach(function(e,i){

     total = total + e.price

    document.querySelector('#cart_total').innerText = total

    var div = document.createElement('div')

    var image = document.createElement('img')
    image.src = e.image

    var name = document.createElement('p')
    name.innerText = e.name

    var price = document.createElement('p')
    price.innerText = e.price

    var button = document.createElement('button')
    button.setAttribute('id','remove')
    button.innerText = `Remove`
    button.addEventListener('click',function(){
        removeitem(e,i)
    })

    document.querySelector('#cart').append(div)
    div.append(image,name,price,button)
})

}


function removeitem(e,i){

    itemsarr.splice(i,1)

    localStorage.setItem('items',JSON.stringify(itemsarr))
    location.reload()

    listcartitems(itemsarr)
 
}