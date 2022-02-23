let partida = 0 // 0=partida no comenzada, 1=partida en curso, -1 partida acabada
let turno = Math.floor(Math.random()*2) 
// turno  0=jugador 1,     1 = jugador 2
//let x = '<img src="fichaX.png">'
//let o = '<img src="fichaO.png">'


let chat = document.getElementById("mensaje")
let nuevaPartida = document.getElementById('jugar')

let cas1 = document.getElementById('casilla1')
let cas2 = document.getElementById('casilla2')
let cas3 = document.getElementById('casilla3')
let cas4 = document.getElementById('casilla4')
let cas5 = document.getElementById('casilla5')
let cas6 = document.getElementById('casilla6')
let cas7 = document.getElementById('casilla7')
let cas8 = document.getElementById('casilla8')
let cas9 = document.getElementById('casilla9')


function comenzar(partida){
   if (partida==0){
      cas1.innerHTML='';
      cas2.innerHTML='';
      cas3.innerHTML='';
      cas4.innerHTML='';
      cas5.innerHTML='';
      cas6.innerHTML='';
      cas7.innerHTML='';
      cas8.innerHTML='';
      cas9.innerHTML='';
   }
   else{
      //pass
   }
}

function mover(casilla){
   if(turno == 0){
      chat.innerHTML='Jugador 2';
      casilla.innerHTML='X'
   }
   else{
      chat.innerHTML='Jugador 1';
      casilla.innerHTML='O'
   }
}

nuevaPartida.addEventListener('click', comenzar(partida))


cas1.addEventListener('click', mover(cas1))
cas2.addEventListener('click', mover(cas2))
cas3.addEventListener('click', mover(cas3))
cas4.addEventListener('click', mover(cas4))
cas5.addEventListener('click', mover(cas5))
cas6.addEventListener('click', mover(cas6))
cas7.addEventListener('click', mover(cas7))
cas8.addEventListener('click', mover(cas8))
cas9.addEventListener('click', mover(cas9))