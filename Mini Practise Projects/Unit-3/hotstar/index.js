
topratedmovies()

async function searchmovie(){

    try{
        var value = document.querySelector('#inputvalues').value
        const url = `https://www.omdbapi.com/?s=${value}&apikey=6d79a18d`

        var res = await fetch(url)
        var data = await res.json()
        movies = data.Search
        return movies
    }
    catch(err){
        console.log(err)
    }

}

var container = document.querySelector('#container')
var id;

function listmovies(movies){

    container.innerHTML = null
    
    movies.forEach(function(e) {
        var name = document.createElement('p')
        name.innerText = e.Title
        name.addEventListener('click',function(){
            moviedetails(e)
        })

        container.append(name)
    });
}

async function main(){

    var movies = await searchmovie()
    if(movies === undefined){
        return
    }
        listmovies(movies)
   
}

function executebyonesec(main,time){

    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        main()
    },time)
}


function moviedetails(e){
    let maincontainer = document.querySelector('#maincontainer')
    maincontainer.innerHTML = null
    console.log(e)

    var img = document.createElement('img')
    img.src = e.Poster

    let div = document.createElement('div')

    let p = document.createElement('p')
    p.innerText = `Title: ${e.Title}`

    let p1 = document.createElement('p')
    p1.innerText = `Type: ${e.Type}`

    let p2 = document.createElement('p')
    p2.innerText = `Release on: ${e.Year}`

    div.append(p,p1,p2)
    maincontainer.append(img,div)
}


async function topratedmovies(){
    try{

        const url3 = `https://api.themoviedb.org/3/movie/now_playing?api_key=ba7427e92b3ae4739a2c108ad29575ae&page=1`

        let data = await fetch(url3)

        data = await data.json()
        topratedgrid(data.results)
        console.log(data.results)

    }
    catch(err){
        console.log(err)
    }
}




function topratedgrid(data){

    data.forEach(e =>{
        let div = document.createElement('div')

        let image = document.createElement('img')
        image.src = `https://image.tmdb.org/t/p/w500${e.backdrop_path}`

        let title = document.createElement('p')
        title.innerText = e.title

        let release = document.createElement('p')
        release.innerText = e.release_date

        let dec = document.createElement('p')
        dec.innerText = e.overview

        div.append(image,title,release,dec)
        document.querySelector('#toprated').append(div)

    })
}

