// Ude Import export (MANDATORY)


import {navbar} from "../components/navbar.js"

document.querySelector('#navbar').innerHTML = navbar()

let data = JSON.parse(localStorage.getItem('news'))

append(data)

function append(data){

        let div = document.createElement('div')
        div.setAttribute('class','news')

        let title = document.createElement('p')
        title.innerText = data.title

        let description = document.createElement('p')
        description.innerText = data.description

        let image = document.createElement('img')
        image.src= data.urlToImage

        let a = document.createElement('a')
        a.href = data.url

        div.append(title,image,description)
        a.append(div)
       
        document.querySelector('#detailed_news').append(a)
}


document.querySelector('input').addEventListener('keypress',logkey)

function logkey(e){
   if(e.code === 'Enter'){
       let value = document.querySelector('input').value
       newslist(value)
   }
}


async function newslist(value){
    let url = `https://masai-mock-api.herokuapp.com/news?q=${value}`

    let res = await fetch(url)
    let data = await res.json()
    localStorage.setItem('searchnews',JSON.stringify(data.articles))
    window.location.href = 'search.html'
}
