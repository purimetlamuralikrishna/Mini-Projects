



var data = JSON.parse(localStorage.getItem('7daysdata'))

console.log(data)



data.forEach(e => {

   let div = document.createElement('div')

   let div1 = document.createElement('div')
   let div2 = document.createElement('div')
   let div3 = document.createElement('div')
   let div4 = document.createElement('div')
   let div5 = document.createElement('div')
   let div6 = document.createElement('div')
   let div7 = document.createElement('div')
    
    let date = document.createElement('p')
    let D = new Date(e.dt*1000).toLocaleDateString()
    date.innerText = `On ${D}`

    let sunrise = document.createElement('p')
    let D1 = new Date(e.sunrise*1000).toLocaleTimeString()
    sunrise.innerText = `${D1}`

    let temp =  document.createElement('p')
    temp.innerText = `${(e.temp.day-273.15).toFixed(2)}deg C`

    let wind =  document.createElement('p')
    wind.innerText = `${(e.wind_speed).toFixed(2)}Kmph`

    let clouds =  document.createElement('p')
    clouds.innerText = `${e.clouds}Kmph`

    let humidity =  document.createElement('p')
    humidity.innerText = `${e.humidity}%`


    var icon = document.createElement('i')
    icon.setAttribute('class', "fa-solid fa-temperature-high")

    var icon3 = document.createElement('i')
    icon3.setAttribute('class',"fa-solid fa-glass-water-droplet")

    var icon4 = document.createElement('i')
    icon4.setAttribute('class',"fa-solid fa-wind")

    var icon5 = document.createElement('i')
    icon5.setAttribute('class',"fa-solid fa-cloud")

    var icon2 = document.createElement('i')
    icon2.setAttribute('class',"fa-solid fa-sun")



    div1.append(icon,temp)
    div2.append(icon4,wind)
    div3.append(icon5,clouds)
    div4.append(icon3,humidity)
    div5.append(icon2,sunrise)
    div.append(date,div5,div1,div2,div3,div4)
    document.querySelector('#container').append(div)
});


