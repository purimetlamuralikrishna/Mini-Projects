// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js"
document.querySelector('#navbar').innerHTML = navbar()


let data = JSON.parse(localStorage.getItem('searchnews'))
append(data)

function append(data){

    data.forEach(e => {
        let div = document.createElement('div')
        div.setAttribute('class','news')
        div.addEventListener('click',function(){
            storeddata(e)
        })

        let title = document.createElement('p')
        title.innerText = e.title

        let description = document.createElement('p')
        description.innerText = e.description

        let image = document.createElement('img')
        image.src= e.urlToImage

        let a = document.createElement('a')
        a.href = 'news.html'


        div.append(title,image,description)
        a.append(div)
       
        document.querySelector('#results').append(a)
    });
}


function storeddata(e){
    let data = e
    localStorage.setItem('news',JSON.stringify(data))
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

