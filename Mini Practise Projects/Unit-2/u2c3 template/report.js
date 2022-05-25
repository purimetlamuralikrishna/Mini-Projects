// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector('form').addEventListener('submit',myfun)


function myfun(){
    event.preventDefault()
    var studentimg = document.querySelector('#image').value
    var studentname = document.querySelector('#name').value
    var studentbatch = document.querySelector('#batch').value
    var studentdsa = document.querySelector('#dsa').value
    var studentcs = document.querySelector('#cs').value
    var studentcoding = document.querySelector('#coding').value

   var img= document.createElement('img')
   img.src=studentimg
   img.setAttribute('tag','img')

    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    td1.append(img)

    var td2 = document.createElement('td')
    td2.innerText = studentname

    var td3 = document.createElement('td')
    td3.innerText = studentbatch

    var td4 = document.createElement('td')
    td4.innerText = studentdsa

    var td5 = document.createElement('td')
    td5.innerText = studentcs

    var td6 = document.createElement('td')
    td6.innerText = studentcoding

    var dsa = +(studentdsa)
    var cs = +(studentcs)
    var coding = +(studentcoding)

    var sum = dsa+cs+coding
    sum= sum/30
    sum = sum*100

    var td7 = document.createElement('td')
    td7.innerText = sum

    var td8 = document.createElement('td')
    if(sum>50){
        td8.innerText="Regular"
        td8.style.backgroundColor = 'green'
    }
    else{
        td8.innerText="Async"
        td8.style.backgroundColor = 'red'
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector('tbody').append(tr)

}