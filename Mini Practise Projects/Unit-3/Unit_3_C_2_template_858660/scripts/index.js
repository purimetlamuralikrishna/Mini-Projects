// Store cart items in local storage with key: "items"



var url = "https://grocery-masai.herokuapp.com/items"

fetch(url).then(function(list){
    return list.json()
}).then(function(list){
    console.log(list.data)
    listallitems(list.data)
})

var itemsarr = JSON.parse(localStorage.getItem('items')) || []
document.querySelector('#item_count').innerText = itemsarr.length


function listallitems(data){

    data.forEach(function(e,i){
        var div = document.createElement('div')

        var image = document.createElement('img')
        image.src = e.image

        var name = document.createElement('p')
        name.innerText = e.name

        var price = document.createElement('p')
        price.innerText = e.price

        var button = document.createElement('button')
        button.setAttribute('id','add_to_cart')
        button.innerText = `Add cart`
        button.addEventListener('click',function(){
            addtocart(e)
        })

        document.querySelector('#items').append(div)
        div.append(image,name,price,button)
    })
}


function addtocart(e){

    itemsarr.push(e)
    localStorage.setItem('items',JSON.stringify(itemsarr))
    document.querySelector('#item_count').innerText = itemsarr.length
    
}

