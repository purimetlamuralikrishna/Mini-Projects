


function Rolldice(){
    var number1 = Math.floor(Math.random()*6)+1
    var number2 = Math.floor(Math.random()*6)+1
    var number3 = Math.floor(Math.random()*6)+1

 document.querySelector('.img1').setAttribute('src','./Dice/dice'+number1+'.png');
 document.querySelector('.img2').setAttribute('src','./Dice/dice'+number2+'.png');
 document.querySelector('.img3').setAttribute('src','./Dice/dice'+number3+'.png');


 if(number1===number2 || number1===number3 || number2 === number3){
    document.querySelector('#winner').innerText = 'DRAW'
    document.querySelector('#member-1').style.backgroundColor = 'blue'
    document.querySelector('#member-2').style.backgroundColor = 'blue'
    document.querySelector('#member-3').style.backgroundColor = 'blue'
 }
 if(number1>number2 && number1>number3){
     document.querySelector('#winner').innerText = 'Winner is  Member A'
     document.querySelector('#member-1').style.backgroundColor = 'green'
     if(number2>number3){
      document.querySelector('#member-2').style.backgroundColor = 'yellow'
      document.querySelector('#member-3').style.backgroundColor = 'red'
      }
      else if(number3>number2){
        document.querySelector('#member-3').style.backgroundColor = 'yellow'
        document.querySelector('#member-2').style.backgroundColor = 'red'
      }
   }
 if(number2>number3 && number2>number1){
    document.querySelector('#winner').innerText = 'Winner is  Member B'
    document.querySelector('#member-2').style.backgroundColor = 'green'
    if(number3>number1){
      document.querySelector('#member-3').style.backgroundColor = 'yellow'
      document.querySelector('#member-1').style.backgroundColor = 'red'
      }
      else if(number1>number3){
        document.querySelector('#member-1').style.backgroundColor = 'yellow'
        document.querySelector('#member-3').style.backgroundColor = 'red'
      }
   }
 if(number3>number1 && number3>number2) {
    document.querySelector('#winner').innerText = 'Winner is  Member C'
    document.querySelector('#member-3').style.backgroundColor = 'green'
    if(number1>number2){
    document.querySelector('#member-1').style.backgroundColor = 'yellow'
    document.querySelector('#member-2').style.backgroundColor = 'red'
    }
    else if(number2>number1){
      document.querySelector('#member-2').style.backgroundColor = 'yellow'
      document.querySelector('#member-1').style.backgroundColor = 'red'
    }
 
   }
}