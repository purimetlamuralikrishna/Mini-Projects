
document.querySelector('form').addEventListener('submit',fun)
function fun(){
    event.preventDefault();
    var items = document.querySelector('#name').value
    var quantity = document.querySelector('#qty').value
    var imp = document.querySelector('#priority').value
    
   var tablerow= document.createElement('tr')

   var tablehead1 = document.createElement('td')
   tablehead1.innerText=items

   var tablehead2 = document.createElement('td')
   tablehead2.innerText=quantity

   var tablehead3 = document.createElement('td')
   tablehead3.innerText=imp
   tablerow.append(tablehead1,tablehead2,tablehead3)

   document.querySelector('#tblbdy').append(tablerow)
   
}