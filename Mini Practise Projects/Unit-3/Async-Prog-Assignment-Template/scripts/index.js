var images_list = []; movies = []
images_list.push("https://wallpaperaccess.com/full/7067663.jpg",
                  "https://wallpaperaccess.com/full/7067663.jpg",
                  "https://wallpaperaccess.com/full/2235016.jpg",
                 "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3819/1163819-h-79a5abfea732",
                 "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1322/441322-h",
                 "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1777/1000071777/1000071777-h"              
)

function object(N,R,P,I){
    this.movie_name = N
    this.release_date = R
    this.poster = P
    this.IMDb = I
}

var obj = new object('KGF-2','14th april','https://wallpaperaccess.com/full/2235016.jpg',4.6)
var obj1 = new object('RRR','14th april','https://wallpaperaccess.com/full/7067663.jpg',4.8)
var obj2 = new object('Batman','14th april','https://images.wallpapersden.com/image/ws-batman-movie-2022-new_82474.jpg',4.3)
var obj3 = new object('Jhon Wick','14th april','https://w0.peakpx.com/wallpaper/512/913/HD-wallpaper-beast-thalapathy-new-vijay-thumbnail.jpg',4.0)
var obj4 = new object('Doctor strange','14th april','https://www.hdwallpapers.in/thumbs/2022/doctor_strange_broken_mirror_image_hd_doctor_strange_in_the_multiverse_of_madness-t2.jpg',4.5)
var obj5 = new object('Robbin hood','14th april','https://wallpaper.dog/large/5445878.jpg',4.0)
var obj6 = new object('Gandi Mahan','14th april','https://wallpaper.dog/large/5445878.jpg',4.1)
var obj7 = new object('Red Panda','14th april','https://wallpaperaccess.com/full/7563782.jpg',3.9)
var obj8 = new object('Valimai','14th april','https://wallpaperaccess.com/full/6294556.jpg',4.2)


movies.push(obj)
movies.push(obj1)
movies.push(obj2)
movies.push(obj3)
movies.push(obj4)
movies.push(obj5)
movies.push(obj6)
movies.push(obj7)
movies.push(obj8)



var show = document.querySelector('#slideshow')
var image = document.createElement('img')
image.src = images_list[0]
show.append(image)

let i = 1;
setInterval(function(){
    image.src = images_list[i]
    show.append(image)
    i++
    if(i===images_list.length){
        i=0
    }
},2000)


window.addEventListener('load',function(){
    moviesListed(movies)
})


function sortlh(){
    movies.sort(function(a,b){
        return a.IMDb-b.IMDb
    })
    moviesListed(movies)
}
function sorthl(){
    movies.sort(function(a,b){
        return b.IMDb-a.IMDb
    })
    moviesListed(movies)
}



function moviesListed(movies){
    document.querySelector('#movies').innerHTML = ""

movies.map(function(e){
    var sub_div = document.createElement('div')
    

    var h4 =  document.createElement('h4')
    h4.innerText = e.movie_name


    var h6 =   document.createElement('h6')
    h6.innerText = `Screening on ${e.release_date}`


    var image =   document.createElement('img')
    image.src = e.poster


    var IMDb =   document.createElement('h6')
    IMDb.innerText = `IMDb reting ${e.IMDb}/5`


    sub_div.append(h4,h6,image,IMDb)
    document.querySelector('#movies').append(sub_div)
})
}