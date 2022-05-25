// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"

document.querySelector('#navbar').innerHTML = navbar()



document.querySelector('#in').addEventListener('click',india)


document.querySelector('#ch').addEventListener('click',china)

document.querySelector('#us').addEventListener('click',usa)


document.querySelector('#uk').addEventListener('click',uk)


document.querySelector('#nz').addEventListener('click',nz)

function  india(){
    let value = 'in'
    console.log(value)
    countrynews(value)

}
function  china(){
    let value =  'ch'
    console.log(value)
    countrynews(value)

}
function  usa(){
    let value = 'us'
    console.log(value)
    countrynews(value)

}
function  uk(){
    let value = 'uk'
    console.log(value)
    countrynews(value)

}
function  nz(){
    let value = 'nz'
    console.log(value)
    countrynews(value)

}
async function countrynews(value){
    let url  = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`

    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)
}

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

function storeddata(e){
    let data = e
    localStorage.setItem('news',JSON.stringify(data))
}
