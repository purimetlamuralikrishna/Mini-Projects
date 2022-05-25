document.querySelector('form').addEventListener('submit',fun)

function fun(){
    event.preventDefault()
    var ctgr = document.querySelector('#category').value
    var product = document.querySelector('#name').value
    var qty = document.querySelector('#price').value

    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    td1.innerText = ctgr

    var td2 = document.createElement('td')
    td2.innerText = product

    var td3 = document.createElement('td')
    td3.innerText = qty

    
    document.querySelector('tbody').append(tr)
    tr.append(td1,td2,td3)
}