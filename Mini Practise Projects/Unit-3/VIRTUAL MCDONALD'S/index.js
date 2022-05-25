

document.querySelector('#menu_form').addEventListener('submit',menufun)


function menufun(){
    event.preventDefault()

   var orderlist = []

    let checkbox = document.getElementsByName('items')

    for(let i=0;i<checkbox.length;i++){

        if(checkbox[i].checked===true){
            orderlist.push(checkbox[i].value)
        }
    }
   
    if(orderlist.length <= 0 ){
        alert('Please select order')
    }
    else{
        myorder(orderlist)
    }

    for(let i=0;i<checkbox.length;i++){
        if(checkbox[i].checked===true){
            orderlist.push(checkbox[i].checked = false)
        }
    }
   
}

function myorder(arr){

    document.querySelector('#order').innerHTML = ""
    document.querySelector('#id').innerText = ""

    let status = 'open'

    var prms = new Promise(function(resolve,reject){
        let time = Math.random()*10*1000

        setTimeout(function(){

            if(status === 'open'){
                resolve(arr)
            }
            else{
                reject(arr)
            }

        },time)
    })

    prms.then(function(arr){
        let num = Math.floor(Math.random()*100)
        document.querySelector('#id').innerText = `Order id : ${num}`

        for(let j=0;j<arr.length;j++){
            let item = arr[j]

            if(item === 'Burger'){
                let img = document.createElement('img')
                img.src = 'https://c4.wallpaperflare.com/wallpaper/143/223/715/food-burgers-hamburgers-fast-food-wallpaper-preview.jpg'
                document.querySelector('#order').append(img)
            }
            else if(item ==='Strips'){
                let img = document.createElement('img')
                img.src = 'https://media.istockphoto.com/photos/fried-chicken-strips-picture-id610223718?b=1&k=20&m=610223718&s=170667a&w=0&h=4AEheUZ_hkAHYtpPvtZ30IZ5GeLlXiSWwAiVBVW4u2E='
                document.querySelector('#order').append(img)
            }
            else if(item === 'Beverages'){
                let img = document.createElement('img')
                img.src = 'https://media.istockphoto.com/photos/cola-with-a-large-splash-isolated-on-blue-picture-id157476159?b=1&k=20&m=157476159&s=170667a&w=0&h=8ErZIAVchr5TQ55x_sHWIfl34NtivmOr96tr72u0w7U='
                document.querySelector('#order').append(img)
            }
            else if(item ==='Chicken Sandwiches'){
                let img = document.createElement('img')
                img.src = 'https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                document.querySelector('#order').append(img)
            }
            else if(item === 'Combo packs'){
                let img = document.createElement('img')
                img.src = 'https://media.istockphoto.com/photos/take-out-food-classic-cheeseburger-meal-on-reflective-white-backdrop-picture-id520410691?b=1&k=20&m=520410691&s=170667a&w=0&h=PP9FfYssz1AUA_lrg525AYdZPSP9xl2BFGhhEShgTFc='
                document.querySelector('#order').append(img)
            }
            else if(item === 'French Fries'){
                let img = document.createElement('img')
                img.src = 'https://images.unsplash.com/photo-1596769968821-6d3bf5e8f50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZW5jaCUyMGZyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                document.querySelector('#order').append(img)
            }
        }
    })
}


