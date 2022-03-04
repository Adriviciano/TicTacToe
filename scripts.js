let partida = 0 // 0=partida no comenzada, 1=partida en curso, -1 partida acabada
let turno = Math.floor(Math.random()*2) 
// turno  0=jugador 1,     1 = jugador 2
let x = '<img src="fichaX.png">'
let o = '<img src="fichaO.png">'


let chat = document.getElementById("mensaje")
let nuevaPartida = document.getElementById('jugar')

let cas0 = document.getElementById('vacia')
let cas1 = document.getElementById('casilla1')
let cas2 = document.getElementById('casilla2')
let cas3 = document.getElementById('casilla3')
let cas4 = document.getElementById('casilla4')
let cas5 = document.getElementById('casilla5')
let cas6 = document.getElementById('casilla6')
let cas7 = document.getElementById('casilla7')
let cas8 = document.getElementById('casilla8')
let cas9 = document.getElementById('casilla9')

if(turno == 1){
   chat.innerHTML="Jugador 2"
} else{
   chat.innerHTML = "Jugador 1"
}

function comenzar(partida){
   console.log('comenzando partida')
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

function comprobarTablero(){

   //filas
   if (cas1.innerHTML == cas2.innerHTML && cas1.innerHTML == cas3.innerHTML && cas1.innerHTML != cas0.innerHTML){
      console.log("Primera fila")
      return true
   }
   else if (cas4.innerHTML == cas5.innerHTML && cas4.innerHTML == cas6.innerHTML && cas4.innerHTML != cas0.innerHTML){
      console.log("Segunda fila")
      return true
   }
   else if (cas7.innerHTML == cas8.innerHTML && cas7.innerHTML == cas9.innerHTML && cas7.innerHTML != cas0.innerHTML){
      console.log("Tercera fila")
      return true
   }


   else if (cas1.innerHTML == cas5.innerHTML && cas1.innerHTML == cas9.innerHTML && cas1.innerHTML != cas0.innerHTML){
      console.log("Diagonal principal")
      return true
   }
   else if (cas3.innerHTML == cas5.innerHTML && cas3.innerHTML == cas7.innerHTML && cas3.innerHTML != cas0.innerHTML){
      console.log("Diagonal inversa")
      return true
   }


   else if (cas1.innerHTML == cas4.innerHTML && cas1.innerHTML == cas7.innerHTML && cas1.innerHTML != cas0.innerHTML){
      console.log("Primera columna")
      return true
   }
   else if (cas2.innerHTML == cas5.innerHTML && cas2.innerHTML == cas8.innerHTML && cas2.innerHTML != cas0.innerHTML){
      console.log("Segunda columna")
      return true
   }
   else if (cas3.innerHTML == cas6.innerHTML && cas3.innerHTML == cas9.innerHTML && cas3.innerHTML != cas0.innerHTML){
      console.log("Tercera columna")
      return true
   }
   else{
      return false
   }
}

function lleno(){
   if (cas1.innerHTML!="" && cas2.innerHTML!="" && cas3.innerHTML!="" && cas4.innerHTML!="" && cas5.innerHTML!="" && cas6.innerHTML!="" && cas7.innerHTML!="" && cas8.innerHTML!="" && cas9.innerHTML!=""){
      return true
   }
   else{
      return false
   }
}

function acabado(){
   if(comprobarTablero() == true){
      return true
   }
   else{
      return false
   }
}

function mover(casilla){
   if (casilla.innerHTML == ""){
      if (lleno() == true || acabado() == true){
         chat.innerHTML="Partida acabada"
      }
      else{
         if(turno == 0){
            console.log('movimiento jugador 1')
            casilla.innerHTML=x
            if(comprobarTablero()==true){
               chat.innerHTML='Gana el Jugador 1'
            }
            else{
               chat.innerHTML='Jugador 2';
               turno=1
            }
         }
         else{
            console.log('movimiento jugador 2')
            casilla.innerHTML=o
            if(comprobarTablero()==true){
               chat.innerHTML='Gana el Jugador 2'
            }
            else{
               chat.innerHTML='Jugador 1';
               turno=0
            }
         }
      }
   }
}

nuevaPartida.onclick = function() {comenzar(partida)}

cas1.onclick = function() {mover(cas1)}
cas2.onclick = function() {mover(cas2)}
cas3.onclick = function() {mover(cas3)}
cas4.onclick = function() {mover(cas4)}
cas5.onclick = function() {mover(cas5)}
cas6.onclick = function() {mover(cas6)}
cas7.onclick = function() {mover(cas7)}
cas8.onclick = function() {mover(cas8)}
cas9.onclick = function() {mover(cas9)}