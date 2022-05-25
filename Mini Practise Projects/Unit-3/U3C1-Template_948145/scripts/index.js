//store the products array in localstorage as "data"

document.querySelector('#product_form').addEventListener('submit',myfun)

var data = JSON.parse(localStorage.getItem('data')) || []

function obj(B,N,P,I){
    this.Brand = B
    this.Name = N
    this.Price = P
    this.image = I
}


function myfun(e){
    event.preventDefault(e)

    var B = document.querySelector('#product_brand').value
    var N = document.querySelector('#product_name').value
    var P = document.querySelector('#product_price').value
    var I = document.querySelector('#product_image').value

   var product = new obj(B,N,P,I)

   data.push(product)

   localStorage.setItem('data',JSON.stringify(data))

}
