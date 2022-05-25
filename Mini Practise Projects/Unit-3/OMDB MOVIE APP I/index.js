



function searchmovielist(){

 var moviename = document.querySelector('#search').value


var url = `https://www.omdbapi.com/?apikey=6d79a18d&s=${moviename}`

fetch(url).then(function(list){
    return list.json()
}).then(function(list){
   console.log(list.Search)
  searchcontent(list.Search)
})

}



function searchcontent(movies){

    document.querySelector('#container').innerHTML= ""
    document.querySelector('#error').innerHTML= ""

   if(movies != undefined){
    movies.forEach(function(e){

        var div = document.createElement('div')

        var name = document.createElement('p')
        name.innerText = e.Title

        var rating = document.createElement('p')
        rating.innerText= `Release:${e.Year}`

        var type = document.createElement('p')
        type.innerText= e.Type

        var poster = document.createElement('img')
        poster.src = e.Poster

        document.querySelector('#container').append(div)
        div.append(name,rating,poster,type)
    })
   }
   else{
       let error = document.createElement('p')
       error.innerText = `Search results not Found`

       let gif = document.createElement('img')
       gif.src = "https://media2.giphy.com/media/TiUYdWptTqn8yOk1Dp/200w.webp?cid=ecf05e47c7vs2jkqyejafr6g4r7ro7ebc1g8zyyz1n9582ng&rid=200w.webp&ct=g"
      
       document.querySelector('#error').append(error,gif)
   }
   
}