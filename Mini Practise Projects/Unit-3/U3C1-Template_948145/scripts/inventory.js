

var data = JSON.parse(localStorage.getItem('data')) || []

window.addEventListener('load',function (){
    products_list(data)
})


function products_list(data){

 data.map(function(e,i){

    var sub_div = document.createElement('div')
    sub_div.setAttribute('id','sub_div')

    var brand = document.createElement('h4')
    brand.innerText = e.Brand

    var name = document.createElement('h6')
    name.innerText = e.Name

    var price = document.createElement('h6')
    price.innerText = `$ ${e.Price}`

    var img = document.createElement('img')
    img.src = e.image

    var remove = document.createElement('button')
    remove.innerText = 'Remove'
    remove.setAttribute('id','remove_product')
    remove.addEventListener('click',function(){
        removeitem(e,i)
    })

    sub_div.append(brand,img,name,price,remove)
    document.querySelector('#products_data').append(sub_div)

 })
}

 function removeitem(e,i){
     data.splice(i,1)
     localStorage.setItem('data',JSON.stringify(data))
     window.location.reload()
     products_list(data)
 }