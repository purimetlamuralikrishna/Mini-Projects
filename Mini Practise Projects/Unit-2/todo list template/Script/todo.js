var maindata =JSON.parse(localStorage.getItem('arrdata')) || []

var completed = JSON.parse(localStorage.getItem('completeddata')) || []


maindata.map (function(E){
    var Name= E.Name
    var quantity=E.Qty
    var pri = E.Priority
    var Task =E.task

    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    td1.innerText = Name

    var td2 = document.createElement('td')
    td2.innerText = quantity

    var td3 = document.createElement('td')
    td3.innerText = pri

   
    var td4 = document.createElement('td')
    td4.innerText = 'Completed'
    td4.addEventListener('click', function () {
        completedtask(E)
    });



    tr.append(td1,td2,td3,td4)

    document.querySelector('#body').append(tr)
});

function completedtask(E){
    completed.push(E)
    localStorage.setItem('completeddata',JSON.stringify(completed))
}

