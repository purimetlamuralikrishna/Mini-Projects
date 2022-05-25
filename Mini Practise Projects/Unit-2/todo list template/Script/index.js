document.querySelector('#form').addEventListener('submit',data)

var arr = JSON.parse(localStorage.getItem('arrdata')) || []
function data(){
    event.preventDefault()

    var name = document.querySelector('#name').value
    var qty = document.querySelector('#qty').value
    var priority = document.querySelector('#priority').value

    var obj = {
        Name : name,
        Qty : qty,
        Priority:priority
    }

    arr.push(obj)
    
    localStorage.setItem("arrdata",JSON.stringify(arr))
}