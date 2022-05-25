
search()

function search(){

    if(document.querySelector('#searchbar').value === ""){
       var City = 'delhi'
    }
    else{
       var City = document.querySelector('#searchbar').value
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=9f99610112acf7f3e710639dcdbe640a`

fetch(url)
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log(data)
    showdata(data)
})

}


function showdata(data){

   var container =  document.querySelector('#container')
   container.innerHTML = ""
   
    var city = document.createElement('p')
    city.innerText = `City: ${data.name}`


    var icon = document.createElement('i')
    icon.setAttribute('class', "fa-solid fa-temperature-high")

    var icon1 = document.createElement('i')
    icon1.setAttribute('class',"fa-solid fa-temperature-arrow-down")

    var icon2 = document.createElement('i')
    icon2.setAttribute('class',"fa-solid fa-temperature-arrow-up")

    var icon3 = document.createElement('i')
    icon3.setAttribute('class',"fa-solid fa-glass-water-droplet")

    var icon4 = document.createElement('i')
    icon4.setAttribute('class',"fa-solid fa-wind")

    var icon5 = document.createElement('i')
    icon5.setAttribute('class',"fa-solid fa-cloud")

    var br = document.createElement('br')
    var br1 = document.createElement('br')
    var br2 = document.createElement('br')
    var br3 = document.createElement('br')
    var br4 = document.createElement('br')
    var br5 = document.createElement('br')

    var temp = document.createElement('p')
    temp.innerText = `Temperature: ${Math.floor(data.main.temp-273.15)} deg C`

    var min_temp = document.createElement('p')
    min_temp.innerText = `Min Temperature: ${Math.floor(data.main.temp_min-273.15)} deg C`

    var max_temp = document.createElement('p')
    max_temp.innerText = `Max Temperature: ${Math.floor(data.main.temp_max-273.15)} deg C`


    var humidity = document.createElement('p')
    humidity.innerText = `humidity: ${data.main.humidity}%`

    var wind = document.createElement('p')
    wind.innerText = `wind speed: ${data.wind.speed*10} kmph`

    var cloud = document.createElement('p')
    cloud.innerText = `clouds: ${data.clouds.all} kmph`


   container.append(city,br,icon,temp,br1,icon1,min_temp,br2,icon2,max_temp,br3,icon3,humidity,br4,icon4,wind,br5,icon5,cloud)


    var map  = document.querySelector('#gmap_canvas')
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function currentlocation( ){

   navigator.geolocation.getCurrentPosition(success);
   function success(pos) {
    var crd = pos.coords
    let lat = crd.latitude
    let lon = crd.longitude
    const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=9f99610112acf7f3e710639dcdbe640a`

    fetch(url2)
.then(function(x){
    return x.json()
}).then(function(x){
    let daily = x.daily
    localStorage.setItem('7daysdata',JSON.stringify(daily))
    window.location.href = '7days.html'
})
}
}





