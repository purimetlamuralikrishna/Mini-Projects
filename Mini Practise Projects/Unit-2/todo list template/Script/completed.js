var data = JSON.parse(localStorage.getItem('completeddata'))||[]


data.map(function(E){

        task=E.Name
        qty=E.Qty
        pry=E.Priority

    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    td1.innerText = task

    var td2 = document.createElement('td')
    td2.innerText = qty

    var td3 = document.createElement('td')
    td3.innerText = pry

    tr.append(td1,td2,td3)
    document.querySelector('tbody').append(tr)
})